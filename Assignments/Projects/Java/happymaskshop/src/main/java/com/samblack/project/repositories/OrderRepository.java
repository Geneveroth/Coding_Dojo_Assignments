package com.samblack.project.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.samblack.project.models.Order;

@Repository
public interface OrderRepository extends CrudRepository<Order, Long>{
	Order findOrderById(Long id);
	Order findByUser(String name);
}