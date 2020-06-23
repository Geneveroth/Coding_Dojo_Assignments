package com.samblack.greatideas.controllers;

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

import com.samblack.greatideas.models.Idea;
import com.samblack.greatideas.models.User;
import com.samblack.greatideas.services.IdeaService;
import com.samblack.greatideas.services.UserService;
import com.samblack.greatideas.validators.UserValidator;

@Controller
public class PrimaryController {
	@Autowired
	UserService userService;
	@Autowired
	IdeaService	ideaService;
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
        	return "redirect:/ideas";
        }
    }
    
    @RequestMapping(value="/login", method=RequestMethod.POST)
    public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password, Model model, HttpSession session) {
    	boolean authenticate=userService.authenticateUser(email, password);
    	if(authenticate) {
    		session.setAttribute("userId",userService.findByEmail(email).getId());
    		return "redirect:/ideas";
    	}
    	else {
    		String error = "Please check your credentials.";
    		model.addAttribute("error", error);
    		return "loginPage.jsp";
       	}
    }
    @GetMapping("/ideas")
   	public String showDashboard(HttpSession session,Model model) {
   		model.addAttribute("ideas", ideaService.allIdeas());
   		return "ideas.jsp";
   	}
    @GetMapping("/ideas/new")
   	public String newIdea(@ModelAttribute("idea") Idea idea, Model model, HttpSession session) {
       	model.addAttribute("users",userService.allUsers());
       	Long id= (Long)session.getAttribute("userId");
       	User user =userService.findUserById(id);
   		return "new.jsp";
   	}
    @PostMapping("/ideas/newidea")
   	public String create(@Valid @ModelAttribute("idea") Idea idea, BindingResult result, HttpSession session, Model model) {
   	    if (result.hasErrors()){
   	    	System.out.println(result.getAllErrors().toString());
   	    	model.addAttribute("users",userService.allUsers());
   	    	Long id= (Long)session.getAttribute("userId");
   	    	User user =userService.findUserById(id);
   	        return "new.jsp";
   	    } else {
   	    	Long id= (Long)session.getAttribute("userId");
   	    	User user =userService.findUserById(id);
   	    	idea.setCreator(user);
   	        ideaService.createIdea(idea);
   	        return "redirect:/ideas/";
   	    }
   	}
    @GetMapping("/ideas/{id}")
   	public String show(@PathVariable("id") Long id, Model model) {
       	model.addAttribute("idea", ideaService.findIdea(id));
   		return "show.jsp";
   	}
   	@RequestMapping("/ideas/{id}/edit")
   	public String editPage(@PathVariable("id") Long id, Model model) {
       	model.addAttribute("idea", ideaService.findIdea(id));
   		return "edit.jsp";
   	}
   	@PostMapping("/ideas/{id}/edit")
   	public String edit(@Valid @ModelAttribute("idea") Idea idea, BindingResult result, @PathVariable Long id, Model model) {
   		if(result.hasErrors()) {
   			if(idea.getIdea().length() < 1) {
   				model.addAttribute("nameError", "You must enter an idea");
   			}
   			model.addAttribute("creator", ideaService.findIdea(id).getCreator());
   	    	model.addAttribute("idea", ideaService.findIdea(id));
  			return "edit.jsp";
   		} else {
   			model.addAttribute("idea", ideaService.findIdea(id));
   			idea.setCreator(ideaService.findIdea(id).getCreator());
   			ideaService.createIdea(idea);
   			return "redirect:/ideas/"+id;
   		}
   	}
    @RequestMapping(value="/ideas/{id}", method=RequestMethod.POST)
	   public String destroy(@PathVariable("id") Long id) {
	       ideaService.deleteIdea(id);
	       return "redirect:/ideas";
	   }
	 @RequestMapping("/logout")
	 public String logout(HttpSession session) {
	 	session.invalidate();
	 	return "redirect:/login";
		}
}
