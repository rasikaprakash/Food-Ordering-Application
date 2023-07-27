package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "cart")
public class Cart {
					@Id
					private int cartid;
					private int userid;
					private int cartitemid;
					public int getCartid() {
						return cartid;
					}
					public void setCartid(int cartid) {
						this.cartid = cartid;
					}
					public int getUserid() {
						return userid;
					}
					public void setUserid(int userid) {
						this.userid = userid;
					}
					public int getCartitemid() {
						return cartitemid;
					}
					public void setCartitemid(int cartitemid) {
						this.cartitemid = cartitemid;
					}
					public Cart(int cartid, int userid, int cartitemid) {
						super();
						this.cartid = cartid;
						this.userid = userid;
						this.cartitemid = cartitemid;
					}
					
				
					

	

}
