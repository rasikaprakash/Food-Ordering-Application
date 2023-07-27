package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Customer;

import com.example.demo.Repository.CustRepo;


@Service
public class CustService {
	@Autowired
	private CustRepo custrepo;
	
	public Customer saveDetails(Customer s)
	{
		return custrepo.save(s);
	}
	
	public List<Customer> getcust()
	{
		return custrepo.findAll();
	}
	
	 public void deletecustId(int id)
	    {
	        custrepo.deleteById(id);
	    }
	 public void updatecust(Customer s) {
		   custrepo.saveAndFlush(s);
	   } 
	 public Customer getCustomerById(int id) {
	        return custrepo.findById(id).get();
	    }
	 public Customer updateCustomer(int id, Customer updatedCustomer) {
	        Customer existingCustomer = custrepo.findById(id).orElse(null);

	        if (existingCustomer != null) {
	            // Update the properties of the existing customer with the new data
	            existingCustomer.setCustname(updatedCustomer.getCustname());
	            existingCustomer.setCustpass(updatedCustomer.getCustpass());
	            existingCustomer.setCustemail(updatedCustomer.getCustemail());
	            existingCustomer.setCustphone(updatedCustomer.getCustphone());
	            existingCustomer.setCustaddress(updatedCustomer.getCustaddress());
	            existingCustomer.setCustimag(updatedCustomer.getCustimag());

	            // Save the updated customer to the database
	            return custrepo.save(existingCustomer);
	        } else {
	            // Customer with the given ID not found, you can handle this case as needed
	            return null;
	        }
	    }
}
