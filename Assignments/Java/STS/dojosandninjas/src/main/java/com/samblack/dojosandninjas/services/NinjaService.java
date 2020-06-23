package com.samblack.dojosandninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.samblack.dojosandninjas.models.Ninja;
import com.samblack.dojosandninjas.repositories.NinjaRepository;

@Service
public class NinjaService {
	private final NinjaRepository ninjaRepository;
	public NinjaService(NinjaRepository ninjaRepository) {
		this.ninjaRepository = ninjaRepository;
	}
	public List<Ninja> allNinjas(){
		return (List<Ninja>) ninjaRepository.findAll();
	}
	public Ninja createNinja(Ninja d) { 
	    return ninjaRepository.save(d);
	}
	public Ninja findNinja(Long id) {
	    Optional<Ninja> ninja = ninjaRepository.findById(id);
	    if(ninja.isPresent()) {
	        return ninja.get();
	    } 
	    else {
	        return null;
	    }
	}
	public void deleteNinja(Long id) {
		ninjaRepository.deleteById(id);	
	}
	public Ninja updateNinja(Ninja ninja) {
		return ninjaRepository.save(ninja);
	}
	
}
