package com.samblack.relationships.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.samblack.relationships.models.Person;

@Repository
public interface PersonRepository extends CrudRepository<Person, Long> {

}
