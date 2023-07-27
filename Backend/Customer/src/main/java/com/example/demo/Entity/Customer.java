package com.example.demo.Entity;

import java.math.BigInteger;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "customer")
public class Customer {
	

	
		@Id
		private int custid;
		private String custname;
		private String custpass;
		private String custemail;
		private BigInteger custphone;
		private String custaddress;
		@Lob
		@Column(columnDefinition="LONGTEXT")
		private String custimag;
		public int getCustid() {
			return custid;
		}
		public void setCustid(int custid) {
			this.custid = custid;
		}
		public String getCustname() {
			return custname;
		}
		public void setCustname(String custname) {
			this.custname = custname;
		}
		public String getCustpass() {
			return custpass;
		}
		public void setCustpass(String custpass) {
			this.custpass = custpass;
		}
		public String getCustemail() {
			return custemail;
		}
		public void setCustemail(String custemail) {
			this.custemail = custemail;
		}
		public BigInteger getCustphone() {
			return custphone;
		}
		public void setCustphone(BigInteger custphone) {
			this.custphone = custphone;
		}
		public String getCustaddress() {
			return custaddress;
		}
		public void setCustaddress(String custaddress) {
			this.custaddress = custaddress;
		}
		public String getCustimag() {
			return custimag;
		}
		public void setCustimag(String custimag) {
			this.custimag = custimag;
		}
		public Customer(int custid, String custname, String custpass, String custemail, BigInteger custphone,
				String custaddress, String custimag) {
			super();
			this.custid = custid;
			this.custname = custname;
			this.custpass = custpass;
			this.custemail = custemail;
			this.custphone = custphone;
			this.custaddress = custaddress;
			this.custimag = custimag;
		}
		
		@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
	    private List<Review> reviews;

	    
	    public List<Review> getReviews() {
	        return reviews;
	    }

	    public void setReviews(List<Review> reviews) {
	        this.reviews = reviews;
	    }
	    public Customer() {
	    	
	    }
		

}
