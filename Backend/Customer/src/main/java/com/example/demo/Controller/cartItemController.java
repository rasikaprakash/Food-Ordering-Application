package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.CartItem;
import com.example.demo.Service.CartItemSErvice;



@RestController
@CrossOrigin(origins="*")
public class cartItemController {
	@Autowired
	private CartItemSErvice carserv;
	
	@PostMapping("/addcart")
	public String saveCart(@RequestBody CartItem s)
	{
		carserv.saveCart(s);
		return "data added";
	}
	@GetMapping("/getcart")
	public List<CartItem> getAllCart()
	{
		return carserv.getcart();
	}
	@PutMapping("putcart/{id}")
    public ResponseEntity<CartItem> updateCartItem(@PathVariable int id, @RequestBody CartItem updatedCartItem) {
        CartItem updatedItem = carserv.updateCartItem(id, updatedCartItem);
        if (updatedItem != null) {
            return ResponseEntity.ok(updatedItem);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
	@DeleteMapping("/delcar/{id}")
	public String deleteStudent(@PathVariable("id") int id){
			carserv.deletecartId(id);
			return "deleted";
		}
}
