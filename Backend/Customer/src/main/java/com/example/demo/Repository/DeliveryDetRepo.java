package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.DeliveryDet;

public interface DeliveryDetRepo extends JpaRepository<DeliveryDet,Integer>{

}
