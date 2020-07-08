package com.samblack.project.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.samblack.project.models.Order;
import com.samblack.project.repositories.OrderRepository;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepository;
    
    public List<Order> allOrders(){
		return (List<Order>) orderRepository.findAll();
	}
    public Order createOrder(Order order) {
    	return orderRepository.save(order);
    }
    public Order findOrderById(Long id) {
    	Optional<Order> o = orderRepository.findById(id);
    	if(o.isPresent()) {
            return o.get();
    	} else {
    	    return null;
    	}
    }
    public void deleteOrder(Long id) {
		orderRepository.deleteById(id);	
	}
	public Order updateOrder(Order order) {
		return orderRepository.save(order);
	}
}