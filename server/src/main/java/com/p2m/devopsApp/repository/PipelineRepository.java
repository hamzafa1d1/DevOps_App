package com.p2m.devopsApp.repository;

import com.p2m.devopsApp.model.PipelineEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PipelineRepository extends MongoRepository<PipelineEntity,String> {
    
}
