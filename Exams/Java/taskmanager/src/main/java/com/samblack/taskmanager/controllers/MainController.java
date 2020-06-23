package com.samblack.taskmanager.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.samblack.taskmanager.models.Task;
import com.samblack.taskmanager.models.User;
import com.samblack.taskmanager.services.TaskService;
import com.samblack.taskmanager.services.UserService;
import com.samblack.taskmanager.validators.UserValidator;

@Controller
public class MainController {
	@Autowired
	UserService userService;
	@Autowired
    TaskService taskService;
	@Autowired
	UserValidator userValidator;
	
	@RequestMapping("")
    public String loginReg(@ModelAttribute("user") User user) {
        return "loginReg.jsp";
    }
	 @RequestMapping("/login")
	    public String login() {
	        return "loginPage.jsp";
	    }
    
    @RequestMapping(value="/registration", method=RequestMethod.POST)
    public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session) {
    	userValidator.validate(user, result);
    	if(result.hasErrors()){
        	return "loginReg.jsp";
        }
        else {
        	User newUser=userService.registerUser(user);
        	session.setAttribute("userId", newUser.getId());
        	session.setAttribute("user", newUser);
        	return "redirect:/tasks";
        }
    }
    
    @RequestMapping(value="/login", method=RequestMethod.POST)
    public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password, Model model, HttpSession session) {
    	boolean authenticate=userService.authenticateUser(email, password);
    	if(authenticate) {
    		session.setAttribute("userId",userService.findByEmail(email).getId());
    		return "redirect:/tasks";
    	}
    	else {
    		String error = "Please check your credentials.";
    		model.addAttribute("error", error);
    		return "login.jsp";
       	}
    }
    @GetMapping("/tasks")
	public String showDashboard(HttpSession session,Model model) {
//		Long id= (Long)session.getAttribute("userId");
//    	User user =userService.findUserById(id);
//    	model.addAttribute("user", user);
		model.addAttribute("tasks", taskService.allTasks());
		return "home.jsp";
	}
    @GetMapping("/tasks/new")
	public String newTask(@ModelAttribute("task") Task task, Model model, HttpSession session) {
    	model.addAttribute("users",userService.allUsers());//get all users
    	Long id= (Long)session.getAttribute("userId");//get logged in user in session based on ID in session
    	User user =userService.findUserById(id);
		return "new.jsp";
	}
    @PostMapping("/tasks/newtask")
	public String create(@Valid @ModelAttribute("task") Task task, BindingResult result, HttpSession session, Model model) {
	    if (result.hasErrors()){
	    	System.out.println(result.getAllErrors().toString());
	    	model.addAttribute("users",userService.allUsers());
	    	Long id= (Long)session.getAttribute("userId");
	    	User user =userService.findUserById(id);
	        return "new.jsp";
	    } else {
	    	Long id= (Long)session.getAttribute("userId");
	    	User user =userService.findUserById(id);
	    	task.setCreator(user);
	        taskService.createTask(task);
	        return "redirect:/tasks/";
	    }
	}
    @GetMapping("/tasks/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
    	model.addAttribute("task", taskService.findTask(id));
		model.addAttribute("creator", taskService.findTask(id).getCreator());
		model.addAttribute("priority", taskService.findTask(id).getPriority());
		return "show.jsp";
	}
	@RequestMapping("/tasks/{id}/edit")
	public String editPage(@PathVariable("id") Long id, Model model) {
		model.addAttribute("users", userService.allUsers());
    	model.addAttribute("task", taskService.findTask(id));
		model.addAttribute("creator", taskService.findTask(id).getCreator());
		model.addAttribute("priority", taskService.findTask(id).getPriority());
		return "edit.jsp";
	}
	@PostMapping("/tasks/{id}/edit")
	public String edit(@Valid @ModelAttribute("task") Task task, BindingResult result, @PathVariable Long id, Model model) {
		if(result.hasErrors()) {
			if(task.getTask().length() < 1) {
				model.addAttribute("nameError", "You must enter a task name");
			}
			System.out.println(result.getAllErrors().toString());
			model.addAttribute("users", userService.allUsers());
	    	model.addAttribute("task", taskService.findTask(id));
			model.addAttribute("creator", taskService.findTask(id).getCreator());
			model.addAttribute("priority", taskService.findTask(id).getPriority());
			return "edit.jsp";
		} else {
			model.addAttribute("task", taskService.findTask(id));
			model.addAttribute("assignees", userService.allUsers());
			taskService.createTask(task);
			return "redirect:/tasks/"+id;
		}
	}
	@RequestMapping(value="/tasks/{id}", method=RequestMethod.POST)
	   public String destroy(@PathVariable("id") Long id) {
	       taskService.deleteTask(id);
	       return "redirect:/tasks";
	   }
    @RequestMapping("/logout")
    public String logout(HttpSession session) {
    	session.invalidate();
    	return "redirect:/login";
	}
}

