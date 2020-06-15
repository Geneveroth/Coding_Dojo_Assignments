package com.samblack.thecode.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class SamController {
	@RequestMapping(value="/", method=RequestMethod.POST)
	public String formPage(@RequestParam(value="code") String code, RedirectAttributes redirectAttributes){
		if(code.equals("bushido")) {
			return "redirect:/code";
		}
		else {
			redirectAttributes.addFlashAttribute("error", "You Must Train Harder!");
			return "redirect:/index";
		}//must redirect in a POST request, cant render a page
	}
	@RequestMapping("/index")
	public String indexPage(@ModelAttribute(value="error") String error) {
		return "index.jsp";
	}
	@RequestMapping("/code")
	public String codePage() {
			return "code.jsp";
	}
}