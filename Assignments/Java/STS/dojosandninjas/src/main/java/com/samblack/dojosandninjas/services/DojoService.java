package com.samblack.dojosandninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.samblack.dojosandninjas.models.Dojo;
import com.samblack.dojosandninjas.repositories.DojoRepository;

@Service
public class DojoService {
	private final DojoRepository dojoRepository;
	public DojoService(DojoRepository dojoRepository) {
		this.dojoRepository = dojoRepository;
	}
	public List<Dojo> allDojos(){
		return (List<Dojo>) dojoRepository.findAll();
	}
	public Dojo createDojo(Dojo d) { 
	    return dojoRepository.save(d);
	}
	public Dojo findDojo(Long id) {
	    Optional<Dojo> dojo = dojoRepository.findById(id);
	    if(dojo.isPresent()) {
	        return dojo.get();
	    } 
	    else {
	        return null;
	    }
	}
	public void deleteDojo(Long id) {
		dojoRepository.deleteById(id);	
	}
	public Dojo updateDojo(Dojo dojo) {
		return dojoRepository.save(dojo);
	}
	
}
