package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Cart;

public interface CartRepo extends JpaRepository<Cart,Integer>{

}
