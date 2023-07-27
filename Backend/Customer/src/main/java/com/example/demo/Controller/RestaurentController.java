package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.Entity.Restaurent;
import com.example.demo.Service.RestaurentService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class RestaurentController {
@Autowired
private RestaurentService restserv;

@PostMapping("/addrest")
public String savDetails(@RequestBody Restaurent s)
{
	restserv.saverest(s);
	return "data added";
}

@GetMapping("/getrest")
public List<Restaurent> getAllDetails()
{
	return restserv.getrest();
}
	
	
}
