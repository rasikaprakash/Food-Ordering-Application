package com.example.demo.Entity;


import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "orders")
public class Orders {
			@Id
			private int orderid;
			public int getOrderid() {
				return orderid;
			}
			public void setOrderid(int orderid) {
				this.orderid = orderid;
			}
			public int getCustid() {
				return custid;
			}
			public void setCustid(int custid) {
				this.custid = custid;
			}
			public Date getOrderdate() {
				return orderdate;
			}
			public void setOrderdate(Date orderdate) {
				this.orderdate = orderdate;
			}
			
			
			public int getAmt() {
				return amt;
			}
			public void setAmt(int amt) {
				this.amt = amt;
			}
			public int getPayment() {
				return paymentid;
			}
			public void setPayment(int paymentid) {
				this.paymentid = paymentid;
			}
			public String getStatus() {
				return status;
			}
			public void setStatus(String status) {
				this.status = status;
			}
			private int custid;
			private Date orderdate;
			
			
			private int amt;
			private int paymentid;
			private String status;
			public Orders(int orderid, int custid, Date orderdate, String deladd, int amt,
				int paymentid, String status) {
				super();
				this.orderid = orderid;
				this.custid = custid;
				this.orderdate = orderdate;
				
				
				this.amt = amt;
				this.paymentid = paymentid;
				this.status = status;
			}
			
			
}
