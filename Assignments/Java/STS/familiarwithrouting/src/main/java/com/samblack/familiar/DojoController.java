package com.samblack.familiar;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DojoController {
	@RequestMapping("/dojo")
	public String dojo() {
		return "The dojo is awesome!";
	}
	@RequestMapping("/{name}-dojo")
	public String burbank(@PathVariable("name")String name) {
		return "The "+name+" Dojo is located in Southern California!";
	}
	@RequestMapping("/{name}")
	public String sanJose(@PathVariable("name")String name) {
		return name+" dojo is the headquarters!";
	}
	
}
