package com.samblack.dojosandninjas.controllers;

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

import com.samblack.dojosandninjas.models.Dojo;
import com.samblack.dojosandninjas.models.Ninja;
import com.samblack.dojosandninjas.services.DojoService;
import com.samblack.dojosandninjas.services.NinjaService;

@Controller
@RequestMapping("/dojos")
public class DojoController {
	@Autowired
	private DojoService dojoService;
	@Autowired
	private NinjaService ninjaService;
	
	@GetMapping("/new")
	public String newDojo(@ModelAttribute("dojo") Dojo dojo, Model model) {
		return "dojoIndex.jsp";
	}
	@PostMapping(value="/newdojo")
	public String create(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result, Model model) {
	    if (result.hasErrors()) {
	        return "redirect:/dojos/new";
	    } else {
	        dojoService.createDojo(dojo);
	        return "redirect:/dojos/new";
	    }
	}
	@GetMapping("/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		model.addAttribute("dojo", dojoService.findDojo(id));
		model.addAttribute("ninjas",dojoService.findDojo(id).getNinjas());

		return "showDojo.jsp";
	}
}
