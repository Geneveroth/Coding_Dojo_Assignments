package com.samblack.relationships.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.samblack.relationships.models.Person;
import com.samblack.relationships.repositories.PersonRepository;

@Service
public class PersonService {
	private final PersonRepository personRepository;
	public PersonService(PersonRepository personRepository) {
		this.personRepository = personRepository;
	}
	public List<Person> allPersons(){
		return (List<Person>) personRepository.findAll();
	}
	public Person createPerson(Person p) { 
	    return personRepository.save(p);
	}
	public Person findPerson(Long id) {
	    Optional<Person> person = personRepository.findById(id);
	    if(person.isPresent()) {
	        return person.get();
	    } 
	    else {
	        return null;
	    }
	}
	public void deletePerson(Long id) {
		personRepository.deleteById(id);	
	}
	public Person updatePerson(Person person) {
		return personRepository.save(person);
	}
}
