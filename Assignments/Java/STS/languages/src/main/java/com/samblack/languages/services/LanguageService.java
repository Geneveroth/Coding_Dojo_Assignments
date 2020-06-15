package com.samblack.languages.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.samblack.languages.models.Language;
import com.samblack.languages.repositories.LanguageRepository;

@Service
public class LanguageService {
	private final LanguageRepository languageRepository;
	 
	public LanguageService(LanguageRepository languageRepository) {
		this.languageRepository = languageRepository;
	}
	public List<Language> allLanguages(){
		return (List<Language>) languageRepository.findAll();
	}
	public Language createLanguage(Language l) { 
	    return languageRepository.save(l);
	}
	public Language findLanguage(Long id) {
	    Optional<Language> language = languageRepository.findById(id);
	    if(language.isPresent()) {
	        return language.get();
	    } 
	    else {
	        return null;
	    }
	}
	public void deleteLanguage(Long id) {
		languageRepository.deleteById(id);	
	}
	public Language updateLanguage(Language language) {
		return languageRepository.save(language);
	}
}
