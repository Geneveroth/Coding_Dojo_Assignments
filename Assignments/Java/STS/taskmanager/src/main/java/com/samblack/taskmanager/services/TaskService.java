package com.samblack.taskmanager.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.samblack.taskmanager.models.Task;
import com.samblack.taskmanager.repositories.TaskRepository;
import com.samblack.taskmanager.repositories.UserRepository;

@Service
public class TaskService {
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	TaskRepository taskRepository;
	
	public List<Task> allTasks(){
		return (List<Task>) taskRepository.findAll();
	}
	public Task createTask(Task t) { 
	    return taskRepository.save(t);
	}
	public Task getTaskById(Long id) {
		return taskRepository.getTaskById(id);
	}
	public Task findTask(Long id) {
	    Optional<Task> task = taskRepository.findById(id);
	    if(task.isPresent()) {
	        return task.get();
	    } 
	    else {
	        return null;
	    }
	}
	public void deleteTask(Long id) {
		taskRepository.deleteById(id);	
	}
	public Task updateTask(Task task) {
		return taskRepository.save(task);
	}
}
