package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Payment;

public interface PaymentRepo extends JpaRepository<Payment,Integer>{

}
