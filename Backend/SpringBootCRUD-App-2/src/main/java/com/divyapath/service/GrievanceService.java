package com.divyapath.service;

import java.util.List;

import com.divyapath.model.Grievance;
import com.divyapath.model.User;

public interface GrievanceService {
	
	void add(Grievance griev); 
	Grievance getById(int id);
	List<Grievance> getAll(); 
	void editById(int id);   
	List<Grievance> getGrievEmail(String email);
	List<Grievance> getByStatus();
 
}
