package com.samblack.project.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.samblack.project.models.Mask;
import com.samblack.project.models.User;

@Repository
public interface MaskRepository extends CrudRepository<Mask, Long>{
	List<Mask> findAll();
	List<Mask> findByCreator(User user);
}

// ok idk if you can hear me but i would use the sry chexck your phone repo and do something like this