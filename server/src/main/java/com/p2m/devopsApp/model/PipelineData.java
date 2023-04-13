package com.p2m.devopsApp.model;

import org.springframework.web.multipart.MultipartFile;

public class PipelineData {
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
    private MultipartFile unitTest ;

    public PipelineData(String description, Integer daysToKeepBuild, Integer maxOfBuildsToKeep, String githubURL, String branchName, String username, String password, String sshKey, String testingFramework, String containerTool, String awsAccessKey, String awsSecretAccessKey, MultipartFile unitTest) {
        this.description = description;
        this.daysToKeepBuild = daysToKeepBuild;
        this.maxOfBuildsToKeep = maxOfBuildsToKeep;
        this.githubURL = githubURL;
        this.branchName = branchName;
        this.username = username;
        this.password = password;
        this.sshKey = sshKey;
        this.testingFramework = testingFramework;
        this.containerTool = containerTool;
        this.awsAccessKey = awsAccessKey;
        this.awsSecretAccessKey = awsSecretAccessKey;
        this.unitTest = unitTest;
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

    public MultipartFile getUnitTest() {
        return unitTest;
    }

    public void setUnitTest(MultipartFile unitTest) {
        this.unitTest = unitTest;
    }
}
