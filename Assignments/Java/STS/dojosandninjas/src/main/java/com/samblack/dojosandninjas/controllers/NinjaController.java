package com.samblack.dojosandninjas.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.samblack.dojosandninjas.models.Dojo;
import com.samblack.dojosandninjas.models.Ninja;
import com.samblack.dojosandninjas.services.DojoService;
import com.samblack.dojosandninjas.services.NinjaService;

@Controller
public class NinjaController {
	@Autowired
	private NinjaService ninjaService;
	@Autowired
	private DojoService dojoService;
	
	@GetMapping("/ninjas/new")
	public String index(@ModelAttribute("ninjaObj") Ninja ninja, Model model) {
		List<Dojo> dojos = dojoService.allDojos();
		model.addAttribute("dojos", dojos);
	    return "ninjaIndex.jsp";
	}
	
	@PostMapping(value="/ninjas")
	public String create(@Valid @ModelAttribute("ninjaObj") Ninja ninja, BindingResult result, Model model) {
		if (result.hasErrors()) {
	        return "redirect:/ninjas/new";
		}
		else {
			ninjaService.createNinja(ninja);
			return "redirect:/ninjas/new";
		}
	    
	}
}
