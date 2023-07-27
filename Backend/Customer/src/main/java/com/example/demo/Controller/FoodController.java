package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.Entity.Food;

import com.example.demo.Service.FoodService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class FoodController {
	@Autowired
	private  FoodService foserv;
	
	
	
	@PostMapping("/addfood")
	public String savDetails(@RequestBody Food s)
	{
		foserv.saveFood(s);
		return "data added";
	}
	
	@GetMapping("/getfood")
	public List<Food> getAllDetails()
	{
		return foserv.getfood();
	}
	@GetMapping("getfoodid/{id}")
    public Food getStudentById(@PathVariable int id) {
        return foserv.getFoodById(id);
    }
	
	@PutMapping("/upfood")	
	public String updatefood(@RequestBody Food s)
	{
		foserv.updatefood(s);
		return "values Updated";
	}
	
	@DeleteMapping("/delfood/{id}")
	public String deletefoodId(@PathVariable("id") int id){
			foserv.deletefoodId(id);
			return "deleted";
		}
}
