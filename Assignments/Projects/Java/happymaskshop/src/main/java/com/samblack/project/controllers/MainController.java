package com.samblack.project.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.samblack.project.models.Mask;
import com.samblack.project.models.Order;
import com.samblack.project.models.User;
import com.samblack.project.services.MaskService;
import com.samblack.project.services.OrderService;
import com.samblack.project.services.UserService;
import com.samblack.project.validators.UserValidator;

@Controller
public class MainController {
	@Autowired
	MaskService maskService;
	@Autowired
	UserService userService;
	@Autowired
	OrderService orderService;
	@Autowired
	UserValidator userValidator;

	@GetMapping("/register")
    public String registerForm(@ModelAttribute("user") User user) {
        return "register.jsp";
    }
    @GetMapping("/login")
    public String login() {
        return "login.jsp";
    }
    
    @PostMapping("/register")
    public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session) {
    	userValidator.validate(user, result);
    	if(result.hasErrors()){
        	return "register.jsp";
        }
        else {
        	User newUser=userService.registerUser(user);
        	session.setAttribute("userId", newUser.getId());
        	session.setAttribute("user", newUser);
        	return "redirect:/";
        }
    }
    
    @PostMapping("/login")
    public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password, Model model, HttpSession session) {
    	boolean authenticate=userService.authenticateUser(email, password);
    	if(authenticate) {
    		session.setAttribute("userId",userService.findByEmail(email).getId());
    		session.setAttribute("email", userService.findByEmail(email).getEmail());
    		return "redirect:/";
    	}
    	else {
    		String error = "Please check your credentials.";
    		model.addAttribute("error", error);
    		return "login.jsp";
       	}
    }
    @GetMapping("")
	public String home(HttpSession session,Model model) {
    	String email= (String)session.getAttribute("email");
    	User user =userService.findByEmail(email);
    	model.addAttribute("user", user);
		return "home.jsp";
    }
    @GetMapping("/order")
    public String order(@ModelAttribute("mask")Mask mask, Model model) {
    	return "order.jsp";
    }
    @PostMapping("/order/create")
    public String create(@Valid @ModelAttribute("mask") Mask mask, @ModelAttribute("order") Order order, BindingResult result, HttpSession session, Model model) {
    	if (result.hasErrors()){
	        return "order.jsp";
	    } else {
	    	Long id= (Long)session.getAttribute("userId");
	    	User user =userService.findUserById(id);
	    	order.setUser(user);
	    	mask.setCreator(user);
	        maskService.createMask(mask);
	        orderService.createOrder(order);
	        return "redirect:/cart";
	    }
	}
    @GetMapping("/cart")
    public String cart(HttpSession session, Model model) {
    	Long id = (Long)session.getAttribute("userId");
    	User user = userService.findUserById(id);
    	model.addAttribute(user);
    	model.addAttribute("masks",maskService.findMasksByCreator(user));
    	return "cart.jsp";
    }
    @GetMapping("/logout")
    public String logout(HttpSession session) {
    	session.invalidate();
    	return "redirect:/";
	}
    
}
