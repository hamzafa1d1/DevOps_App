package com.p2m.devopsApp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
@Document(collection = "containers")
public class ContainerEntity {
    @Id
    private String id ;
    private String name ;
    private LocalDateTime containerizationTime ;
    private String status ;
    private String errorMessage;
    private String path ;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDateTime getContainerizationTime() {
        return containerizationTime;
    }

    public void setContainerizationTime(LocalDateTime containerizationTime) {
        this.containerizationTime = containerizationTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }
}
