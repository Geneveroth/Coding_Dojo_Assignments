package com.samblack.counter.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller

public class CounterController {
	public int count=0;
	@RequestMapping("/")
	public String home() {
		count++;
		return "index.jsp";
	}
	@RequestMapping("/counter")
	public String counterPage(HttpSession session) {
		session.setAttribute("count", count);
		session.getAttribute("count");
		return "counter.jsp";
	}
	@RequestMapping("/counter2")
	public String counter2Page(HttpSession session) {
		count+=2;
		session.setAttribute("count", count);
		return "counter2.jsp";
	}
}
