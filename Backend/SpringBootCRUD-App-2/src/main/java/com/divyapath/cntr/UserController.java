package com.divyapath.cntr;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.divyapath.dao.UserDao;
import com.divyapath.model.User;
import com.divyapath.service.UserService;
 
@RestController
@CrossOrigin(origins ="*")
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping(value = {"/user/add"}) 
	public String userAdd(@RequestBody User user) {
		userService.add(user);
		return "success";
	} 
	
// 	@GetMapping(value = {"/user/{uid}"})
// 	public User userGet(@PathVariable int uid) {
// 		return userService.getById(uid);
// 	}
 	
	@GetMapping(value = {"/user"})
	public List<User> userList(){
		return userService.getAll();
	}
	
	@PostMapping(value = {"/user/login"})
	public User userLogin(@RequestBody User user) {
		
		return userService.login(user);
	}  
	 
	@GetMapping(value = {"/userprofile/{email}"})
 	public User userGet(@PathVariable String email) {
 		return userService.getUserByEmail(email);
 	}
	
 
	//-----admin approval----------
	@GetMapping(value = {"/user/authenticate"})
	public List<User> unAuthenticatedAdmins(){
		return userService.getByUnauthenticated();
	}
	
	@PostMapping(value = {"/admin/approval/{email}"})
	public String Authorize(@PathVariable String email) {
		userService.approveAdmin(email);
		return "success";
	}
	//-----admin removal----------
	@GetMapping(value = {"/user/admins"})
	public List<User> authenticatedAdmins(){
		return userService.getAdmins();
	}
	
	@PostMapping(value = {"/admin/removal/{email}"})
	public String UnAuthorize(@PathVariable String email) {
		userService.revokeAdmin(email);
		return "success";
	}
		
}
 
 
