package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "food")
public class Food {

			@Id
			private int foodid;
			private String foodname;
			
			private int fodprice;
			private int foodrat;
		     private String imagurl;
			public Food(int foodid, String foodname, int fodprice, int foodrat, String imagurl
					) {
				super();
				this.foodid = foodid;
				this.foodname = foodname;
				
				this.fodprice = fodprice;
				this.foodrat = foodrat;
				this.imagurl = imagurl;
				
			}

			public String getImagurl() {
				return imagurl;
			}

			public void setImagurl(String imagurl) {
				this.imagurl = imagurl;
			}

			
			

			public int getFoodid() {
				return foodid;
			}

			public void setFoodid(int foodid) {
				this.foodid = foodid;
			}

			public String getFoodname() {
				return foodname;
			}

			public void setFoodname(String foodname) {
				this.foodname = foodname;
			}

			

			public int getFodprice() {
				return fodprice;
			}

			public void setFodprice(int fodprice) {
				this.fodprice = fodprice;
			}

			public int getFoodrat() {
				return foodrat;
			}

			public void setFoodrat(int foodrat) {
				this.foodrat = foodrat;
			}

			
			public Food() {
				
			}

}
