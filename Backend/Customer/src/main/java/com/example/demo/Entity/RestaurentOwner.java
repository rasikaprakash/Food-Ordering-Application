package com.example.demo.Entity;

import java.math.BigInteger;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "restaurentowner")
public class RestaurentOwner {

		
			@Id
			private int ownerid;
			private String ownername;
			private String ownerpass;
			private String owneremail;
			private BigInteger ownerphone;
			public int getOwnerid() {
				return ownerid;
			}
			public void setOwnerid(int ownerid) {
				this.ownerid = ownerid;
			}
			public String getOwnername() {
				return ownername;
			}
			public void setOwnername(String ownername) {
				this.ownername = ownername;
			}
			public String getOwnerpass() {
				return ownerpass;
			}
			public void setOwnerpass(String ownerpass) {
				this.ownerpass = ownerpass;
			}
			public String getOwneremail() {
				return owneremail;
			}
			public void setOwneremail(String owneremail) {
				this.owneremail = owneremail;
			}
			public BigInteger getOwnerphone() {
				return ownerphone;
			}
			public void setOwnerphone(BigInteger ownerphone) {
				this.ownerphone = ownerphone;
			}
			public RestaurentOwner(int ownerid, String ownername, String ownerpass, String owneremail,
					BigInteger ownerphone) {
				super();
				this.ownerid = ownerid;
				this.ownername = ownername;
				this.ownerpass = ownerpass;
				this.owneremail = owneremail;
				this.ownerphone = ownerphone;
			}
			
			

}
