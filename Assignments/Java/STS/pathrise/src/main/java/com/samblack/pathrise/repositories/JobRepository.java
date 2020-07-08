package com.samblack.pathrise.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.samblack.pathrise.models.Job;

@Repository
public interface JobRepository extends CrudRepository <Job, Long>{
	Job getJobById(Long id);
}
