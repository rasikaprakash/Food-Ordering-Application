
package com.example.demo.Entity;

import java.math.BigInteger;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "restaurent")
public class Restaurent {		
				@Id
				private int restid;
				
				private String restname;
				private String restfam;
				private String type;
				private String distance;
				private String time;
				private String restimag;
				private int rating;
				public String getRestimag() {
					return restimag;
				}
				public void setRestimag(String restimag) {
					this.restimag = restimag;
				}
				public int getRating() {
					return rating;
				}
				public void setRating(int rating) {
					this.rating = rating;
				}
				public int getRestid() {
					return restid;
				}
				public void setRestid(int restid) {
					this.restid = restid;
				}
				public String getRestname() {
					return restname;
				}
				public void setRestname(String restname) {
					this.restname = restname;
				}
				public String getRestfam() {
					return restfam;
				}
				public void setRestfam(String restfam) {
					this.restfam = restfam;
				}
				public String getType() {
					return type;
				}
				public void setType(String type) {
					this.type = type;
				}
				public String getDistance() {
					return distance;
				}
				public void setDistance(String distance) {
					this.distance = distance;
				}
				public String getTime() {
					return time;
				}
				
				public Restaurent(int restid, String restname, String restfam, String type, String distance,
						String time, String restimag, int rating) {
					super();
					this.restid = restid;
					this.restname = restname;
					this.restfam = restfam;
					this.type = type;
					this.distance = distance;
					this.time = time;
					this.restimag = restimag;
					this.rating = rating;
				}
				public void setTime(String time) {
					this.time = time;
				}
			public Restaurent() {
				
			}
				
}
