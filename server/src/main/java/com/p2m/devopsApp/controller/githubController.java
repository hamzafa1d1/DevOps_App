package com.p2m.devopsApp.controller;

import com.p2m.devopsApp.model.WebhookPayload;
import org.eclipse.jgit.api.Git;
import org.eclipse.jgit.api.errors.GitAPIException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;

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
}
