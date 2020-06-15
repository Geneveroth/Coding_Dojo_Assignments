package com.samblack.mvc.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.samblack.mvc.models.Book;
import com.samblack.mvc.services.BookService;

@Controller
public class BooksController {
	private final BookService bookService;//establishing service as a variable
	 
	public BooksController(BookService bookService) {//instantiating book controller and allows me to use service, using service variable
	    this.bookService = bookService;
	}
	
	@RequestMapping("/books")
	public String index(Model model) {
	    List<Book> books = bookService.allBooks();
	    model.addAttribute("books", books);
	    return "/books/index.jsp";
	}
	@RequestMapping("/books/new")
	public String newBook(@ModelAttribute("book") Book book) {//model att is what im accessing on front end. data type Book represented by book. have to pass forward empty book and then form fills in the book as needed. sending "book" to jsp of type Book named book
	    return "/books/new.jsp";
	}
	@RequestMapping(value="/books", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("book") Book book, BindingResult result) {
	 //must be in the above order for errors,@valid, @modelattribute, binding- all pieces of validations.
	 //binding result hold result of validation and contains any errors that occurred
	    if (result.hasErrors()) {
	        return "/books/new.jsp";
	        //return the jsp file here because then the errors hit the page, must render them instead of redirect even though its a post request
	    } else {
	        bookService.createBook(book);
	        return "redirect:/books";
	    }
	}
	@RequestMapping("/books/{book_id}")
	public String show(@PathVariable("book_id") Long id, Model model) {
		Book book =bookService.findBook(id);
		model.addAttribute("book",book);
		return "/books/show.jsp";
	}
	@RequestMapping("/books/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model) {
        Book book = bookService.findBook(id);
        model.addAttribute("book", book);
        return "/books/edit.jsp";
    }
    
    @RequestMapping(value="/books/{id}", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("book") Book book, BindingResult result) {
        if (result.hasErrors()) {
            return "/books/edit.jsp";
        } else {
            bookService.updateBook(book);
            return "redirect:/books";
        }
    }
    @RequestMapping(value="/books/{id}", method=RequestMethod.DELETE)
    public String destroy(@PathVariable("id") Long id) {
        bookService.deleteBook(id);
        return "redirect:/books";
    }
}
//like urls.py in django
//maps requests to routes when they are hit