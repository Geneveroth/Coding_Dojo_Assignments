package com.samblack.taskmanager.repositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.samblack.taskmanager.models.Task;

@Repository
public interface TaskRepository extends CrudRepository<Task, Long>{
	Task getTaskById(Long id);
}

