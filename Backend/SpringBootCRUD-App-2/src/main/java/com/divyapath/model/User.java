package com.divyapath.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
 

@Entity  
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int uid;
	private String name;
	private String city;
	private String mobile;
	@Column(unique = true)
	private String email;
	private String disabiltyType;  
	private String password;
	private String dob;
	private String role;
	private String deptId;
	@Column(unique = true)
	private String empId;
	private String authenticate;
	
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	private String sex;
	
	 
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getdeptId() {
		return deptId;
	}
	public void setdeptId(String dept) {
		this.deptId = dept;
	}
	public String getEmpId() {
		return empId;
	}
	public void setEmpId(String empId) {
		this.empId = empId;
	}
	public String getAuthenticate() {
		return authenticate;
	}
	public void setAuthenticate(String authenticate) {
		this.authenticate = authenticate;
	}
	 
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getDisabiltyType() {
		return disabiltyType;
	}
	public void setDisabiltyType(String disabiltyType) {
		this.disabiltyType = disabiltyType;
	}
	 
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
 
}
