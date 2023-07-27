package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Customer;
import com.example.demo.Entity.RestaurentOwner;

public interface RestOwnerRepo extends JpaRepository<RestaurentOwner, Integer>{

}
