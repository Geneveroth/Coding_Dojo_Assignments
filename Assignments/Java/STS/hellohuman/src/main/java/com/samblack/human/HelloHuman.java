package com.samblack.human;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class HelloHuman {
	@RequestMapping("/")
	public String human(@RequestParam(value="name", required=false)String name) {
		if(name!=null) {
			return "Hello "+name+"! Welcome to Spring Boot!";
		}
		else return "Hello Human! Welcome to Spring Boot!";
	}
	

}
