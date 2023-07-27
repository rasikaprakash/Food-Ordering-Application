package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Delivery;



public interface DeliveryRepo extends JpaRepository<Delivery, Integer> {

}
