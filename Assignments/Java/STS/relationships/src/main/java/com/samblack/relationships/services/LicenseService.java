package com.samblack.relationships.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.samblack.relationships.models.License;
import com.samblack.relationships.repositories.LicenseRepository;

@Service
public class LicenseService {
	private final LicenseRepository licenseRepository;
	public LicenseService(LicenseRepository licenseRepository) {
		this.licenseRepository = licenseRepository;
	}
	public List<License> allLicenses(){
		return (List<License>) licenseRepository.findAll();
	}
	public License createLicense(License l) { 
	    return licenseRepository.save(l);
	}
	public License findLicense(Long id) {
	    Optional<License> license = licenseRepository.findById(id);
	    if(license.isPresent()) {
	        return license.get();
	    } 
	    else {
	        return null;
	    }
	}
	public void deleteLicense(Long id) {
		licenseRepository.deleteById(id);	
	}
	public License updateLicense(License license) {
		return licenseRepository.save(license);
	}
	
}
