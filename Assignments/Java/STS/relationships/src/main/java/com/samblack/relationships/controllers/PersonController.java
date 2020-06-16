package com.samblack.relationships.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.samblack.relationships.models.License;
import com.samblack.relationships.models.Person;
import com.samblack.relationships.services.LicenseService;
import com.samblack.relationships.services.PersonService;

@Controller
public class PersonController {
	@Autowired
	private LicenseService licenseService;
	@Autowired
	private PersonService personService;
	
	@RequestMapping("/persons/new")
	public String newPerson(@ModelAttribute("person") Person person, Model model) {//taking an entity from DB, passing to person.jsp
		return "personIndex.jsp";//must pass the above stuff to tie this to the form, even on first load
	}
	@RequestMapping(value="/persons", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("person") Person person, BindingResult result, Model model) {
	    if (result.hasErrors()) {
	        return "redirect:/persons/new";
	    } else {
	        personService.createPerson(person);
	        return "redirect:/persons/new";
	    }
	}
	@RequestMapping("/persons/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
//		Person person =personService.findPerson(id);
		License license = licenseService.findLicense(id);
//		model.addAttribute("person", person);
		model.addAttribute("license", license);
		return "showPerson.jsp";
	}
}
