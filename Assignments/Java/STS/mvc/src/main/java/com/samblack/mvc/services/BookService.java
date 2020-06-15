package com.samblack.mvc.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.samblack.mvc.models.Book;
import com.samblack.mvc.repositories.BookRepository;
@Service
public class BookService {
	// adding the book repository as a dependency
	private final BookRepository bookRepository;//making the repository a variable, like making it an instance. why i can call on methods
 
	public BookService(BookRepository bookRepository) {//BookRepository is acting like a data type
		this.bookRepository = bookRepository;
	}
	// returns all the books
	public List<Book> allBooks() {
	    return bookRepository.findAll();
	}
	// creates a book
	public Book createBook(Book b) { //Book is the data type (object), because its a model that holds fields and methods attached to it
	    return bookRepository.save(b);//saving a book object to database via save method from repository
	}
	// retrieves a book
	public Book findBook(Long id) {
		//optional will return something or nothing. will return an error if nothing found
	    Optional<Book> optionalBook = bookRepository.findById(id);//optionalBook is equal to whatever book object is returned by findId function
	    if(optionalBook.isPresent()) {
	        return optionalBook.get();
	    } 
	    else {
	        return null;
	    }
	}
	public void deleteBook(Long id) {
		bookRepository.deleteById(id);	
	}
	//must take in all the fields i want to update to be able to update them
	public Book updateBook(Book book) {
		return bookRepository.save(book);
	}
}
//services are where existing methods are called upon from repository
//middleman file between controller and repository
//call on service from controller to be able to call upon the repository from the controller
//similar to views in django

