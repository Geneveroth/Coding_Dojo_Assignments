package com.samblack.greatideas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.samblack.greatideas.models.Idea;
import com.samblack.greatideas.repositories.IdeaRepository;

@Service
public class IdeaService {
	@Autowired
	IdeaRepository ideaRepository;
		
	public List<Idea> allIdeas(){
		return (List<Idea>) ideaRepository.findAll();
	}
	public Idea createIdea(Idea i) { 
	    return ideaRepository.save(i);
	}
	public Idea getIdeaById(Long id) {
		return ideaRepository.getIdeaById(id);
	}
	public Idea findIdea(Long id) {
	    Optional<Idea> idea = ideaRepository.findById(id);
	    if(idea.isPresent()) {
	        return idea.get();
	    } 
	    else {
	        return null;
	    }
	}
	public void deleteIdea(Long id) {
		ideaRepository.deleteById(id);	
	}
	public Idea updateIdea(Idea idea) {
		return ideaRepository.save(idea);
	}
}