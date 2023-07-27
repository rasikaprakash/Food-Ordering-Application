package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "orderitem")
public class OrderItem {
				public OrderItem(int orderItemid, int orderid, int foodid, int quantity, int total) {
		super();
		this.orderItemid = orderItemid;
		this.orderid = orderid;
		this.foodid = foodid;
		this.quantity = quantity;
		this.total = total;
	}
				public int getOrderItemid() {
		return orderItemid;
	}
	public void setOrderItemid(int orderItemid) {
		this.orderItemid = orderItemid;
	}
	public int getOrderid() {
		return orderid;
	}
	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}
	public int getFoodid() {
		return foodid;
	}
	public void setFoodid(int foodid) {
		this.foodid = foodid;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
				@Id
				private int orderItemid;
				private int orderid;
				private int foodid;
				private int quantity;
				private int total;
			
				

}
