package com.samblack.relationships.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.samblack.relationships.models.Person;
import com.samblack.relationships.services.PersonService;

@Controller
public class PersonController {
	public final PersonService personService;
	
	public PersonController(PersonService personService) {
		this.personService=personService;
	}
	@RequestMapping("/persons/new")
	public String newPerson(@ModelAttribute("person") Person person, Model model) {
		return "person.jsp";
	}
	@RequestMapping(value="/persons", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("person") Person person, BindingResult result, Model model) {
	    if (result.hasErrors()) {
	    	List<Person> persons = personService.allPersons();
	        return "personIndex.jsp";
	    } else {
	        personService.createPerson(person);
	        return "redirect:/persons/new";
	    }
	}
}
