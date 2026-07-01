package com.searchjob.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.searchjob.entity.JobApplication;

public interface JobApplicationRepository
        extends JpaRepository<JobApplication, Long> {

}