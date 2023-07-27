package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "orderitem")
public class Payment {
					@Id
					private int payid;
					private int orderid;
					private int payamt;
					private String paystatus;
					private String paymeth;
					public int getPayid() {
						return payid;
					}
					public void setPayid(int payid) {
						this.payid = payid;
					}
					public int getOrderid() {
						return orderid;
					}
					public void setOrderid(int orderid) {
						this.orderid = orderid;
					}
					public int getPayamt() {
						return payamt;
					}
					public void setPayamt(int payamt) {
						this.payamt = payamt;
					}
					public String getPaystatus() {
						return paystatus;
					}
					public void setPaystatus(String paystatus) {
						this.paystatus = paystatus;
					}
					public String getPaymeth() {
						return paymeth;
					}
					public void setPaymeth(String paymeth) {
						this.paymeth = paymeth;
					}
					public Payment(int payid, int orderid, int payamt, String paystatus, String paymeth) {
						super();
						this.payid = payid;
						this.orderid = orderid;
						this.payamt = payamt;
						this.paystatus = paystatus;
						this.paymeth = paymeth;
					}
					
				
					

	}


