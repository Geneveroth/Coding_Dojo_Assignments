package com.samblack.relationships.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.samblack.relationships.models.License;
import com.samblack.relationships.models.Person;
import com.samblack.relationships.services.LicenseService;
import com.samblack.relationships.services.PersonService;

@Controller
public class LicenseController {
	@Autowired
	private LicenseService licenseService;
	@Autowired
	private PersonService personService;
	
	@GetMapping("/licenses/new")
	public String index(@ModelAttribute("licenseObj") License license, Model model) {
		List<Person>persons= personService.allPersons();
		model.addAttribute("persons", persons);
	    return "licenseIndex.jsp";
	}
	@PostMapping(value="/license")
	public String create(@Valid @ModelAttribute("licenseObj") License license, BindingResult result) {
	    if (result.hasErrors()) {
	        return "licenseIndex.jsp";
	    } else {
	    	String number = licenseService.generateLicenseNumber();
			license.setNumber(number);
			licenseService.addLicense(license);
			return "redirect:/persons/" +license.getId();
	}
}
