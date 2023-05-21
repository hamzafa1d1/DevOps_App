package com.p2m.devopsApp.controller;

import com.p2m.devopsApp.model.WebhookPayload;
import org.apache.commons.exec.CommandLine;
import org.apache.commons.exec.DefaultExecutor;

import org.apache.commons.exec.ExecuteException;
import org.eclipse.jgit.api.Git;
import org.eclipse.jgit.api.errors.GitAPIException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;

@RestController
@RequestMapping("/payload")
public class githubController {
    @PostMapping
    public ResponseEntity<String> handleWebhookEvent(@RequestBody WebhookPayload payload) {
        // Extract necessary information from the payload
        String repositoryUrl = payload.getRepository().getUrl();
        String branch = payload.getRef().substring("refs/heads/".length());

        // Retrieve the source code from the GitHub repository
        retrieveSourceCode(repositoryUrl, branch);
        if (buildCode()) {
            // containerize w deploy
            System.out.println("build succeeded");
        }
        else{
            System.out.println("build failed");
        }

        return ResponseEntity.ok("Webhook event handled successfully.");
    }

    private void retrieveSourceCode(String repositoryUrl, String branch) {
        File destinationDir = new File("./server/source");

        // Check if the destination directory already exists and is a valid Git repository
        boolean isExistingRepository = destinationDir.exists();

        if (isExistingRepository) {
            // Perform a pull request to update the existing repository
            try (Git git = Git.open(destinationDir)) {
                git.pull().call();
                System.out.println("Source code pulled successfully.");
            } catch (GitAPIException | IOException e) {
                System.err.println("Error pulling source code from the repository: " + e.getMessage());
            }
        } else {
            // Clone the repository since it doesn't exist
            try (Git git = Git.cloneRepository()
                    .setURI(repositoryUrl)
                    .setBranch(branch)
                    .setDirectory(destinationDir)
                    .call()) {
                System.out.println("Source code cloned successfully.");
            } catch (GitAPIException e) {
                System.err.println("Error cloning source code from the repository: " + e.getMessage());
            }
        }
    }
    public boolean buildCode() {
        try {
            // Navigate to the source code directory
            File sourceDir = new File("./server/source");

            // Run the CMake command to configure the build
            Process process = Runtime.getRuntime().exec("cmake .", null, sourceDir);
            int cmakeExitCode = process.waitFor();

            if (cmakeExitCode != 0) {
                System.err.println("CMake configuration failed");
                return false;
            }

            // Run the CMake command to build the code
            CommandLine buildCmd = new CommandLine("cmake");
            buildCmd.addArgument("--build");
            buildCmd.addArgument(".");
            DefaultExecutor buildExecutor = new DefaultExecutor();
            buildExecutor.setWorkingDirectory(sourceDir);

            try {
                int buildExitCode = buildExecutor.execute(buildCmd);

                if (buildExitCode != 0) {
                    System.err.println("Code build failed");
                    return false;
                }

                System.out.println("Code build successful");
                return true;
            } catch (ExecuteException e) {
                e.printStackTrace();
                return false;
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return false;
    }
    public boolean runUnitTests(String testFilePath, String cppFilePath) {
        try {
            // Navigate to the directory containing the C++ file
            File cppFileDir = new File(cppFilePath).getParentFile();

            // Compile the test file and the C++ file together
            ProcessBuilder compileProcessBuilder = new ProcessBuilder("g++", "-o", "testExecutable", testFilePath, cppFilePath);
            compileProcessBuilder.directory(cppFileDir);
            Process compileProcess = compileProcessBuilder.start();
            compileProcess.waitFor();
            int compileExitCode = compileProcess.exitValue();

            if (compileExitCode != 0) {
                System.err.println("Compilation failed");
                return false;
            }

            // Execute the test executable
            ProcessBuilder runProcessBuilder = new ProcessBuilder("./testExecutable");
            runProcessBuilder.directory(cppFileDir);
            Process runProcess = runProcessBuilder.start();
            runProcess.waitFor();

            // Read the output of the test executable
            BufferedReader reader = new BufferedReader(new InputStreamReader(runProcess.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }

            // Check the exit code of the test executable
            int runExitCode = runProcess.exitValue();
            return runExitCode == 0; // Unit tests passed if the exit code is 0
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return false; // Unit tests failed
    }
}


}
