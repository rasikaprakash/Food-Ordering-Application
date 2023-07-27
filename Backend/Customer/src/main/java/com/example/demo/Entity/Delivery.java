package com.example.demo.Entity;

import java.math.BigInteger;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "delivery")
public class Delivery {
				@Id
				private int deliveryboyid;
				private String delname;
				private String delpass;
				private BigInteger delphone;
				private String delemail;
				private boolean availability;
				private String loc;
				private int vehno;
				public int getDeliveryboyid() {
					return deliveryboyid;
				}
				public void setDeliveryboyid(int deliveryboyid) {
					this.deliveryboyid = deliveryboyid;
				}
				public String getDelname() {
					return delname;
				}
				public void setDelname(String delname) {
					this.delname = delname;
				}
				public String getDelpass() {
					return delpass;
				}
				public void setDelpass(String delpass) {
					this.delpass = delpass;
				}
				public BigInteger getDelphone() {
					return delphone;
				}
				public void setDelphone(BigInteger delphone) {
					this.delphone = delphone;
				}
				public String getDelemail() {
					return delemail;
				}
				public void setDelemail(String delemail) {
					this.delemail = delemail;
				}
				public boolean isAvailability() {
					return availability;
				}
				public void setAvailability(boolean availability) {
					this.availability = availability;
				}
				public String getLoc() {
					return loc;
				}
				public void setLoc(String loc) {
					this.loc = loc;
				}
				public int getVehno() {
					return vehno;
				}
				public void setVehno(int vehno) {
					this.vehno = vehno;
				}
				public Delivery(int deliveryboyid, String delname, String delpass, BigInteger delphone, String delemail,
						boolean availability, String loc, int vehno) {
					super();
					this.deliveryboyid = deliveryboyid;
					this.delname = delname;
					this.delpass = delpass;
					this.delphone = delphone;
					this.delemail = delemail;
					this.availability = availability;
					this.loc = loc;
					this.vehno = vehno;
				}
				
			
				

}
