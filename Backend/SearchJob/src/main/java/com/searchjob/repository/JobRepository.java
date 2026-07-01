package com.searchjob.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.searchjob.entity.Job;

public interface JobRepository extends JpaRepository<Job, Long> {

}
