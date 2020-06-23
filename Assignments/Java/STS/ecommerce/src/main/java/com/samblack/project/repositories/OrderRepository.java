package com.samblack.project.repositories;

import javax.persistence.criteria.Order;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends CrudRepository<Order, Long>{
	Order getOrdeOrById(Long id);
}
