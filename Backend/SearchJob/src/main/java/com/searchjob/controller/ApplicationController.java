package com.searchjob.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.searchjob.entity.JobApplication;
import com.searchjob.service.ApplicationService;

@RestController
@RequestMapping("/applications")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @PostMapping
    public JobApplication applyJob(
            @RequestBody JobApplication application) {

        return applicationService.applyJob(application);
    }

    @GetMapping
    public List<JobApplication> getApplications() {

        return applicationService.getAllApplications();
    }
}