package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "cartitem")
public class CartItem {
					@Id
					@GeneratedValue
					private int cartItemid;
					private String name;
					private String price;
					private String imageurl;
					private int quantity;
					public int getCartItemid() {
						return cartItemid;
					}
					public void setCartItemid(int cartItemid) {
						this.cartItemid = cartItemid;
					}
					public String getName() {
						return name;
					}
					public void setName(String name) {
						this.name = name;
					}
					public String getPrice() {
						return price;
					}
					public void setPrice(String price) {
						this.price = price;
					}
					public String getImageurl() {
						return imageurl;
					}
					public void setImageurl(String imageurl) {
						this.imageurl = imageurl;
					}
					public int getQuantity() {
						return quantity;
					}
					public void setQuantity(int quantity) {
						this.quantity = quantity;
					}
					public CartItem(int cartItemid, String name, String price, String imageurl, int quantity) {
						super();
						this.cartItemid = cartItemid;
						this.name = name;
						this.price = price;
						this.imageurl = imageurl;
						this.quantity = quantity;
					}
					
					
				public CartItem() {
					
				}
					

	

}
