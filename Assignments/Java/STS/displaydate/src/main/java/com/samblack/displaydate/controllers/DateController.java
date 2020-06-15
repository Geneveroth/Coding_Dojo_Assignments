package com.samblack.displaydate.controllers;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class DateController {
	@RequestMapping("/")
	public String home() {
		return "home.jsp";
	}
	
	@RequestMapping("/date")
	public String date(Model model) {
		java.util.Date date=new java.util.Date();
		SimpleDateFormat formatter=new SimpleDateFormat("EEEE',' 'the' d 'of' MMMM',' yyyy");
		String strDate=formatter.format(date);
		model.addAttribute("date",strDate);
		return "date.jsp";
	}
	
	@RequestMapping("/time")
	public String time(Model model) {
		LocalDateTime timeObj = LocalDateTime.now();
		DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("hh:mm a");
	    String formattedTime = timeObj.format(myFormatObj);
		model.addAttribute("time",formattedTime);
		return "time.jsp";
	}
	

}
