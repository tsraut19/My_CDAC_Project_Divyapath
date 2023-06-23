package com.divyapath.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.divyapath.dao.UserDao;
import com.divyapath.model.Places;
import com.divyapath.model.User;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao userDao; 
	
	@Override
	public void add(User user) {
		userDao.save(user); 
	}
  
	@Override
	public List<User> getAll() {
		Iterable<User> itr = userDao.findAll();
		List<User> lst = new ArrayList<User>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}
	 
//	@Override
//	public String login(User user) { 
//		List<User> lst = new ArrayList<User>();
//		lst =userDao.findAllActiveUsersNative(user.getEmail(),user.getPassword());
////		if(lst.role.equals("admin")&& lst.and authenticate==0) {
////			return "Admin approval is pending"
////		}
//		if (lst.isEmpty() || lst==null) {
//			return "Invalid user";
//		}
//		else {
//			return "Login successful";
//		}
//		
//	}
	
	//-------- login---------
	@Override
	public User login(User user) { 
		List<User> lst = new ArrayList<User>();
		lst = userDao.findAllActiveUsersNative(user.getEmail(),user.getPassword());
		User userq = userDao.findbyEmailId(user.getEmail());
		if(userq.getPassword().equals(user.getPassword()))
		{
			return userq;
		}
		if (lst.isEmpty() || lst==null) {
			return null;
		}
		else {
			return null;
		}
		
	}
 
	@Override
	public List<User> getByUnauthenticated() {
		return userDao.findByAuthenticate();
	}

	@Override
	public void approveAdmin(String email) {
		userDao.authenticateAdmin(email);
	}
	
	@Override
	public List<User> getAdmins() {
		return userDao.findAdmins();
	}
	
	
	@Override
	public void revokeAdmin(String email) {
		userDao.removeAdmin(email);
	}
	
	

	@Override
	public User getUserByEmail(String email) { 
		return  userDao.findbyEmailId(email); 
	}
 
}
