package com.divyapath.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;

@Entity
public class Grievance {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int gid;
	private String fname;
	private String lname; 
	private String email;
	private String mobile;
	private String subject;
	private String description; 
	private String status;
	  
	public int getGid() {
		return gid;
	}
	public void setGid(int gid) {
		this.gid = gid;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	 public Grievance() {
	        this.status = "Pending";
	 }
	 @PrePersist
	 public void prePersist() {
	     if (this.status == null) {
	         this.status = "pending";
	     }
	 }
	 /* @PrePersist annotation marks the prePersist() method as a callback method to be executed before the entity is persisted to the database.
	    In this case, it sets the default value of status field to "pending" if it is not already set. 
	 */
	 
}
