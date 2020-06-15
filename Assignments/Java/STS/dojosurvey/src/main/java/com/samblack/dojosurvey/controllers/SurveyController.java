package com.samblack.dojosurvey.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class SurveyController {
	@RequestMapping(value="/", method=RequestMethod.POST)
	public String surveyForm(@RequestParam(value="name") String name, @RequestParam(value="location") String location, @RequestParam(value="language") String language, @RequestParam(value="comment") String comment, RedirectAttributes redirectAttributes, HttpSession session) {
		if(name.equals("") || location.equals("") || language.equals("")) {
			redirectAttributes.addFlashAttribute("error", "You must complete the form!");
			return "redirect:/index";
		}
		else {
			session.setAttribute("name", name);
	        session.setAttribute("location", location);
	        session.setAttribute("language", language);
	        session.setAttribute("comment", comment);
			return "redirect:/result";
		}
	}
	@RequestMapping("/index")
	public String indexPage(@ModelAttribute(value="error") String error) {
		return "index.jsp";
	}
	@RequestMapping("/result")
	public String resultPage(){
		return "result.jsp";
	}
}
