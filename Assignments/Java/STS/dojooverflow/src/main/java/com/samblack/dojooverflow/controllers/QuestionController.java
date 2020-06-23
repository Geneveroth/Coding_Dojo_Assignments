package com.samblack.dojooverflow.controllers;

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

import com.samblack.dojooverflow.models.Answer;
import com.samblack.dojooverflow.models.Question;
import com.samblack.dojooverflow.models.Tag;
import com.samblack.dojooverflow.models.User;
import com.samblack.dojooverflow.services.AnswerService;
import com.samblack.dojooverflow.services.QuestionService;
import com.samblack.dojooverflow.services.TagService;
import com.samblack.dojooverflow.services.UserService;
import com.samblack.dojooverflow.validators.UserValidator;

@Controller
public class QuestionController {
	@Autowired
	QuestionService questionService;
	@Autowired
	AnswerService answerService;
	@Autowired
	TagService tagService;
	@Autowired
    UserService userService;
	@Autowired
	UserValidator userValidator;
	@RequestMapping("/")
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
        	return "redirect:/questions";
        }
    }
    
    @RequestMapping(value="/login", method=RequestMethod.POST)
    public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password, Model model, HttpSession session) {
    	boolean authenticate=userService.authenticateUser(email, password);
    	if(authenticate) {
    		session.setAttribute("userId",userService.findByEmail(email).getId());
    		return "redirect:/questions";
    	}
    	else {
    		String error = "Please check your credentials.";
    		model.addAttribute("error", error);
    		return "login.jsp";
       	}
    }
	
	@GetMapping("/questions")
	public String showDashboard(HttpSession session,Model model) {
		Long id= (Long)session.getAttribute("userId");
    	User user =userService.findUserById(id);
    	model.addAttribute("user", user);
		model.addAttribute("questions", questionService.allQuestions());
		model.addAttribute("tags", tagService.allTags());
		return "dashboard.jsp";
	}
	@GetMapping("/questions/new")
	public String newQuestion(@ModelAttribute("question") Question question, Model model) {
		return "new.jsp";
	}
	@PostMapping("/questions/newquestion")
	public String create(@Valid @ModelAttribute("question") Question question, BindingResult result, @ModelAttribute("tags") Tag tag) {
	    if (result.hasErrors()){
	        return "new.jsp";
	    } else {
	        questionService.createQuestion(question);
	        return "redirect:/questions/";
	    }
	}
	@GetMapping("/questions/{id}")
	public String show(@PathVariable("id") Long id, Model model, @ModelAttribute("answer") Answer answer) {//using @modelAttribute is good for passing thru an empty variable/object
		model.addAttribute("question", questionService.findQuestion(id));
		model.addAttribute("tags", questionService.findQuestion(id).getTags());
		model.addAttribute("answers", questionService.findQuestion(id).getAnswers());
		return "show.jsp";
	}
	@RequestMapping("/questions"+"/{questionId}")
	public String answer(@PathVariable Long questionId, @Valid @ModelAttribute("answer") Answer answer, BindingResult result, Model model) {
		if(result.hasErrors()) {
			model.addAttribute("question", questionService.findQuestion(questionId));
			model.addAttribute("tags", questionService.findQuestion(questionId).getTags());
			model.addAttribute("answers", questionService.findQuestion(questionId).getAnswers());
			return "show.jsp";
		} else {
			answer.setQuestion(questionService.getQuestionById(questionId));
			answerService.createAnswer(answer);
		}
		return "redirect:/questions/"+questionId;
	}
	@RequestMapping("/logout")
    public String logout(HttpSession session) {
    	session.invalidate();
    	return "redirect:/login";
	}

}
