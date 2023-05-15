package com.p2m.devopsApp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Document(collection= "pipelines")
public class PipelineEntity {
    @Id
    private String id ;
    private String pipelineName;
    private String description ;
    private Integer daysToKeepBuild ;
    private Integer maxOfBuildsToKeep ;
    private String githubURL ;
    private String branchName;
    private String username;
    private String password ;
    private String sshKey;
    private String testingFramework ;
    private String containerTool ;
    private String awsAccessKey ;
    private String awsSecretAccessKey ;
    private CppFile unitTest ;
    private List<BuildEntity> builds ;
    private List<ContainerEntity> containers ;
    private List<unitTestsEntity> tests;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getDaysToKeepBuild() {
        return daysToKeepBuild;
    }

    public void setDaysToKeepBuild(Integer daysToKeepBuild) {
        this.daysToKeepBuild = daysToKeepBuild;
    }

    public Integer getMaxOfBuildsToKeep() {
        return maxOfBuildsToKeep;
    }

    public void setMaxOfBuildsToKeep(Integer maxOfBuildsToKeep) {
        this.maxOfBuildsToKeep = maxOfBuildsToKeep;
    }

    public String getGithubURL() {
        return githubURL;
    }

    public void setGithubURL(String githubURL) {
        this.githubURL = githubURL;
    }

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSshKey() {
        return sshKey;
    }

    public void setSshKey(String sshKey) {
        this.sshKey = sshKey;
    }

    public String getTestingFramework() {
        return testingFramework;
    }

    public void setTestingFramework(String testingFramework) {
        this.testingFramework = testingFramework;
    }

    public String getContainerTool() {
        return containerTool;
    }

    public void setContainerTool(String containerTool) {
        this.containerTool = containerTool;
    }

    public String getAwsAccessKey() {
        return awsAccessKey;
    }

    public void setAwsAccessKey(String awsAccessKey) {
        this.awsAccessKey = awsAccessKey;
    }

    public String getAwsSecretAccessKey() {
        return awsSecretAccessKey;
    }

    public void setAwsSecretAccessKey(String awsSecretAccessKey) {
        this.awsSecretAccessKey = awsSecretAccessKey;
    }



    public List<BuildEntity> getBuilds() {
        return builds;
    }

    public void setBuilds(List<BuildEntity> builds) {
        this.builds = builds;
    }

    public List<ContainerEntity> getContainers() {
        return containers;
    }

    public void setContainers(List<ContainerEntity> containers) {
        this.containers = containers;
    }

    public List<unitTestsEntity> getTests() {
        return tests;
    }

    public void setTests(List<unitTestsEntity> tests) {
        this.tests = tests;
    }

    public CppFile getUnitTest() {
        return unitTest;
    }

    public void setUnitTest(CppFile unitTest) {
        this.unitTest = unitTest;
    }
    public String getPipelineName() {
        return pipelineName;
    }

    public void setPipelineName(String pipelineName) {
        this.pipelineName = pipelineName;
    }
}
