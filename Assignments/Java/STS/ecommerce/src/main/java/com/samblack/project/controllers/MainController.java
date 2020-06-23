package com.samblack.project.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.samblack.project.models.User;
import com.samblack.project.services.UserService;
import com.samblack.project.validators.UserValidator;

@Controller
public class MainController {
	@Autowired
	UserService userService;
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
        	return "redirect:/home";
        }
    }
    
    @RequestMapping(value="/login", method=RequestMethod.POST)
    public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password, Model model, HttpSession session) {
    	boolean authenticate=userService.authenticateUser(email, password);
    	if(authenticate) {
    		session.setAttribute("userId",userService.findByEmail(email).getId());
    		return "redirect:/home";
    	}
    	else {
    		String error = "Please check your credentials.";
    		model.addAttribute("error", error);
    		return "login.jsp";
       	}
    }
}
