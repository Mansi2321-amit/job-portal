package com.searchjob.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.searchjob.entity.JobApplication;
import com.searchjob.repository.JobApplicationRepository;

@Service
public class ApplicationService {

    @Autowired
    private JobApplicationRepository jobApplicationRepository;

    public JobApplication applyJob(JobApplication application) {
        return jobApplicationRepository.save(application);
    }

    public List<JobApplication> getAllApplications() {
        return jobApplicationRepository.findAll();
    }
}