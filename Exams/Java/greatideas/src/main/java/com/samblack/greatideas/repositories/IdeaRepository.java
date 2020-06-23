package com.samblack.greatideas.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.samblack.greatideas.models.Idea;

@Repository
public interface IdeaRepository extends CrudRepository<Idea, Long>{
	Idea getIdeaById(Long id);
}
