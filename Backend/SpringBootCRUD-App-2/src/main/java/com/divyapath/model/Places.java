package com.divyapath.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity  
public class Places {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int pid;
	String nameOfPlace;
	String description;
	String location;
	String linkOnMap;
	String image;
//	@Lob
//	byte[] imageData;
//	
//	public byte[] getImageData() {
//		return imageData;
//	}
	
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	//	public void setImageData(byte[] bs) {
//		this.imageData = bs;
//	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getNameOfPlace() {
		return nameOfPlace;
	}
	public void setNameOfPlace(String nameOfPlace) {
		this.nameOfPlace = nameOfPlace;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getLinkOnMap() {
		return linkOnMap;
	}
	public void setLinkOnMap(String linkOnMap) {
		this.linkOnMap = linkOnMap;
	}
	
}
