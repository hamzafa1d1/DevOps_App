package com.p2m.devopsApp.controller;

import com.p2m.devopsApp.model.CppFile;
import com.p2m.devopsApp.model.PipelineEntity;
import com.p2m.devopsApp.service.PipelineDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import com.p2m.devopsApp.model.PipelineData;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PipelineDataController {
    @Autowired
    private PipelineDataService pipelineDataService ;
    @PostMapping(value = "/pipelineData" ,  consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String handlingPipelineData(@ModelAttribute PipelineData pipelineData , @RequestPart("testFile")MultipartFile unitTest) throws IOException {
        PipelineEntity pipelineEntity = new PipelineEntity() ;
        pipelineEntity.setDescription(pipelineData.getDescription());
        pipelineEntity.setAwsAccessKey(pipelineData.getAwsAccessKey());
        pipelineEntity.setBranchName(pipelineData.getBranchName());
        pipelineEntity.setAwsAccessKey(pipelineData.getAwsAccessKey());
        pipelineEntity.setContainerTool(pipelineData.getContainerTool());
        pipelineEntity.setDaysToKeepBuild(pipelineData.getDaysToKeepBuild());
        pipelineEntity.setMaxOfBuildsToKeep(pipelineData.getMaxOfBuildsToKeep());
        pipelineEntity.setGithubURL(pipelineData.getGithubURL());
        pipelineEntity.setSshKey(pipelineData.getSshKey());
        pipelineEntity.setPassword(pipelineData.getPassword());
        pipelineEntity.setTestingFramework(pipelineData.getTestingFramework());
        pipelineEntity.setUsername(pipelineData.getUsername());
        pipelineEntity.setPipelineName(pipelineData.getPipelineName());
        CppFile cppFile = new CppFile() ;
        cppFile.setFileName(unitTest.getOriginalFilename());
        cppFile.setContent(unitTest.getBytes());
        pipelineEntity.setUnitTest(cppFile);
        pipelineDataService.savePipelineData(pipelineEntity);
        return "done" ;
    }
}
