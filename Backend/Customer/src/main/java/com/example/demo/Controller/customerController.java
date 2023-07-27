package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Customer;

import com.example.demo.Service.CustService;


@RestController
@CrossOrigin(origins="http://localhost:3000")
public class customerController {
	@Autowired
	private  CustService serv;
	
	
	
	@PostMapping("/addcust")
	public String savDetails(@RequestBody Customer s)
	{
		serv.saveDetails(s);
		return "data added";
	}
	
	@GetMapping("/getcust")
	public List<Customer> getAllDetails()
	{
		return serv.getcust();
	}
	@GetMapping("getcustid/{id}")
    public Customer getStudentById(@PathVariable int id) {
        return serv.getCustomerById(id);
    }
	
	@PutMapping("/upcust")	
	public String updatedetails(@RequestBody Customer s)
	{
		serv.updatecust(s);
		return "values Updated";
	}
	
	@DeleteMapping("/delcust/{id}")
	public String deleteStudent(@PathVariable("id") int id){
			serv.deletecustId(id);
			return "deleted";
		}
	@PutMapping("/upcus/{id}")
	
    public ResponseEntity<Customer> updateCustomer(@PathVariable int id, @RequestBody Customer updatedCustomer) {
        Customer updatedCust = serv.updateCustomer(id, updatedCustomer);
        if (updatedCust != null) {
            return new ResponseEntity<>(updatedCust, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
