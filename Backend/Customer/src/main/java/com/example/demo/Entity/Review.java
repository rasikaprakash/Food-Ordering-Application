package com.example.demo.Entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "review")
public class Review {
			
				public Review(int revid, int revhotid, int rating, String des) {
		super();
		this.revid = revid;
		this.revhotid = revhotid;
		
		this.rating = rating;
		this.des = des;
	}
				public Review() {
					
				}
				public int getRevid() {
		return revid;
	}
	public void setRevid(int revid) {
		this.revid = revid;
	}
	public int getRevhotid() {
		return revhotid;
	}
	public void setRevhotid(int revhotid) {
		this.revhotid = revhotid;
	}
	
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getDes() {
		return des;
	}
	public void setDes(String des) {
		this.des = des;
	}
				@Id
				private int revid;
				private int revhotid;
				
				private int rating;
				private String des;
				@ManyToOne
			    @JoinColumn(name = "revcusid", referencedColumnName = "custid")
			    private Customer customer;

			    // Getter and Setter for customer
			    public Customer getCustomer() {
			        return customer;
			    }

			    public void setCustomer(Customer customer) {
			        this.customer = customer;
			    }
				

}
