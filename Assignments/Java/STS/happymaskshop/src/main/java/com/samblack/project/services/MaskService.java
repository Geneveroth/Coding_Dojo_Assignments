package com.samblack.project.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.samblack.project.models.Mask;
import com.samblack.project.models.User;
import com.samblack.project.repositories.MaskRepository;

@Service
public class MaskService {
    @Autowired
    MaskRepository maskRepository;
    
    public List<Mask> allMasks(){
		return (List<Mask>) maskRepository.findAll();
	}
    public Mask createMask(Mask mask) {
    	return maskRepository.save(mask);
    }
    public Mask findMaskById(Long id) {
    	Optional<Mask> m = maskRepository.findById(id);
    	if(m.isPresent()) {
            return m.get();
    	} else {
    	    return null;
    	}
    }
    public List<Mask> findMasksByCreator(User user) {
    	return maskRepository.findByCreator(user);
    }
    public void deleteMask(Long id) {
		maskRepository.deleteById(id);	
	}
	public Mask updateMask(Mask mask) {
		return maskRepository.save(mask);
	}
}
