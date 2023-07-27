package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.Entity.Food;
import com.example.demo.Repository.Foodrepo;

@Service
public class FoodService {
    @Autowired
    private Foodrepo forep;
    public Food saveFood(Food s)
	{
		return forep.save(s);
	}
	
	public List<Food> getfood()
	{
		return forep.findAll();
	}
	
	 public void deletefoodId(int id)
	    {
	        forep.deleteById(id);
	    }
	 public void updatefood(Food s) {
		   forep.saveAndFlush(s);
	   } 
	 public Food getFoodById(int id) {
	        return forep.findById(id).get();
	    }
}
