package com.samblack.pathrise.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.samblack.pathrise.models.Job;
import com.samblack.pathrise.repositories.JobRepository;

@Service
public class JobService {
	@Autowired
	JobRepository jobRepository;

	public List<Job> allJobs(){
		return (List<Job>) jobRepository.findAll();
	}
	public Job createJob(Job j) { 
	    return jobRepository.save(j);
	}
	public Job getJobById(Long id) {
		return jobRepository.getJobById(id);
	}
	public Job findJob(Long id) {
	    Optional<Job> job = jobRepository.findById(id);
	    if(job.isPresent()) {
	        return job.get();
	    } 
	    else {
	        return null;
	    }
	}
	public void deleteJob(Long id) {
		jobRepository.deleteById(id);	
	}
	public Job updateJob(Job job) {
		return jobRepository.save(job);
	}
	
}
