package com.samblack.pathrise.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.samblack.pathrise.models.Job;
import com.samblack.pathrise.services.JobService;

@Controller
public class JobController {
	@Autowired
	JobService jobService;
	
	@GetMapping("/")
	public String main(Model model) {
//		PrettyTime p = new PrettyTime();
		model.addAttribute("jobs", jobService.allJobs());
		return "main.jsp";
	}
	
	@PostMapping("/create")
	public String create(@ModelAttribute("job") Job job) {
		jobService.createJob(job);
	    return "redirect:/";
	}
	@PostMapping("/{id}") 
	public String destroy(@PathVariable("id") Long id) {
	    jobService.deleteJob(id);
	    return "redirect:/";
	   }
}
