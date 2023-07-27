package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Review;

public interface ReviewRepo extends JpaRepository<Review, Integer>
{

}
