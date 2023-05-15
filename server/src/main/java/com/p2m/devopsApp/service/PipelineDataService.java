package com.p2m.devopsApp.service;

import com.p2m.devopsApp.model.CppFile;
import com.p2m.devopsApp.model.PipelineData;
import com.p2m.devopsApp.model.PipelineEntity;
import com.p2m.devopsApp.repository.PipelineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PipelineDataService {
    @Autowired
    private  PipelineRepository pipelineRepository ;

    public void savePipelineData(PipelineEntity pipelineEntity) {
        pipelineRepository.save(pipelineEntity) ;
    }
}
