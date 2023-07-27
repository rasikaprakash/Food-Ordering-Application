package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.Entity.Restaurent;

public interface RestaurentRepo  extends JpaRepository<Restaurent, Integer>{

}
