package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "orderitem")
public class DeliveryDet {
					@Id
					private int deldteid;
					private int delid;
					private int custid;
					private int orderid;
					private int paymentid;
					public DeliveryDet(int deldteid, int delid, int custid, int orderid, int paymentid) {
						super();
						this.deldteid = deldteid;
						this.delid = delid;
						this.custid = custid;
						this.orderid = orderid;
						this.paymentid = paymentid;
					}
					public int getDeldteid() {
						return deldteid;
					}
					public void setDeldteid(int deldteid) {
						this.deldteid = deldteid;
					}
					public int getDelid() {
						return delid;
					}
					public void setDelid(int delid) {
						this.delid = delid;
					}
					public int getCustid() {
						return custid;
					}
					public void setCustid(int custid) {
						this.custid = custid;
					}
					public int getOrderid() {
						return orderid;
					}
					public void setOrderid(int orderid) {
						this.orderid = orderid;
					}
					public int getPaymentid() {
						return paymentid;
					}
					public void setPaymentid(int paymentid) {
						this.paymentid = paymentid;
					}
				
					

	}


