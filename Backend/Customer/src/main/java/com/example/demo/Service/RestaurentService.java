package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.Entity.Restaurent;
import com.example.demo.Repository.RestaurentRepo;

@Service
public class RestaurentService {
@Autowired
	private RestaurentRepo restrep;
	public List<Restaurent> getrest()
	{
		return restrep.findAll();
	}
	public Restaurent saverest(Restaurent s)
	{
		return restrep.save(s);
	}
}
