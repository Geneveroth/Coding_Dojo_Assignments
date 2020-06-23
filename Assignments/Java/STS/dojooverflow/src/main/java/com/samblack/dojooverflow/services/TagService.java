package com.samblack.dojooverflow.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.samblack.dojooverflow.models.Tag;
import com.samblack.dojooverflow.repositories.AnswerRepository;
import com.samblack.dojooverflow.repositories.QuestionRepository;
import com.samblack.dojooverflow.repositories.TagRepository;

@Service
public class TagService {
	@Autowired
	QuestionRepository questionRepository;
	@Autowired
	AnswerRepository answerRepository;
	@Autowired
	TagRepository tagRepository;
	
	public List<Tag> allTags(){
		return (List<Tag>) tagRepository.findAll();
	}
	public Tag createTag(Tag t) { 
	    return tagRepository.save(t);
	}
	public Tag findTag(Long id) {
	    Optional<Tag> tag = tagRepository.findById(id);
	    if(tag.isPresent()) {
	        return tag.get();
	    } 
	    else {
	        return null;
	    }
	}
	public void deleteTag(Long id) {
		tagRepository.deleteById(id);	
	}
	public Tag updateTag(Tag tag) {
		return tagRepository.save(tag
				);
	}
	
}
