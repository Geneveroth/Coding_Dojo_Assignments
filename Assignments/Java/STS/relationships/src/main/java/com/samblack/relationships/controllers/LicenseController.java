package com.samblack.relationships.controllers;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

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
		List<Person> persons = personService.allPersons();
		model.addAttribute("persons", persons);//gets data onto jsp
	    return "licenseIndex.jsp";
	}
	
	@PostMapping(value="/licenses")//must match method in jsp
	public String create(@RequestBody @Valid @ModelAttribute("licenseObj") License license, @RequestParam(value="expirationDate") String date, BindingResult result) {
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd");
		try {
			Date expireDate = dateFormat.parse(date);
			license.setExpirationDate(expireDate);
		} catch (ParseException e) {

			e.printStackTrace();
		}
		
		System.out.println(license.getPerson());

		if (result.hasErrors()) {
	        return "licenseIndex.jsp";
	    } else {
//	    	String number = licenseService.generateLicenseNumber(); //define this in service, ran number+id
//	    	license.setNumber(number);
	    	License newLicense= licenseService.createLicense(license);
	    	Long id = newLicense.getId();
	    	return "redirect:/persons/"+ Long.toString(id);
	    }
	    	
	}
}
