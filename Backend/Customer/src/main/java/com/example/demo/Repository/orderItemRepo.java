package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.OrderItem;

public interface orderItemRepo extends JpaRepository<OrderItem,Integer>{

}
