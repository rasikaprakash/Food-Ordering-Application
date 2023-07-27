package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.CartItem;

import com.example.demo.Repository.CartItemRepo;


@Service
public class CartItemSErvice {
   @Autowired
   private CartItemRepo carrep;
   
   public CartItem saveCart(CartItem s)
	{
		return carrep.save(s);
	}
   public List<CartItem> getcart()
	{
		return carrep.findAll();
	}
   public CartItem updateCartItem(int id, CartItem updatedCartItem) {
       CartItem cartItem = carrep.findById(id).orElse(null);
       if (cartItem != null) {
           cartItem.setQuantity(updatedCartItem.getQuantity());
           return carrep.save(cartItem);
       }
       return null;
   }
   public void deletecartId(int id)
   {
       carrep.deleteById(id);
   }
}
