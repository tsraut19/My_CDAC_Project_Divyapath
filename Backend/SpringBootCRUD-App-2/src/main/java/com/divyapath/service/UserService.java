package com.divyapath.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.divyapath.model.User;

@Service
public interface UserService {
	void add(User user);  
	List<User> getAll(); 
	User login(User user); 
	
	void revokeAdmin(String email); 
	List<User> getByUnauthenticated(); 
	void approveAdmin(String email); 
	User getUserByEmail(String email);
	List<User> getAdmins();
}
	
