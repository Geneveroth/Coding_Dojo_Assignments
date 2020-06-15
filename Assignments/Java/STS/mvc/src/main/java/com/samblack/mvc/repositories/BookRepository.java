package com.samblack.mvc.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.samblack.mvc.models.Book;
@Repository
public interface BookRepository extends CrudRepository<Book, Long>{//Book is class name, Long is primary key type
  
    List<Book> findAll();  //List is data structure , Book is data type within the structure. can only include Book in this 
    Optional<Book> findById(Long id);
    void deleteById(Long id); //no return or data structure
    
}
//Repository holds queries, dont need to define them. The crud repository contains the functions I need and i can use here
//because of that. I dont need to even have lines 13-15. The functions are already defined in the Crud repository.
