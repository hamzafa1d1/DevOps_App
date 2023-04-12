package com.p2m.devopsApp.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import com.p2m.devopsApp.model.PipelineData;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PipelineDataController {
    @PostMapping("/pipelineData")
    public String handlingPipelineData(@ModelAttribute PipelineData pipelineData){
        System.out.println(pipelineData.getAwsAccessKey());
        return "done" ;
    }
}
