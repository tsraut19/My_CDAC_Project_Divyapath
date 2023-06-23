package com.divyapath.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.divyapath.dao.GrievanceDao;
import com.divyapath.dao.UserDao;
import com.divyapath.model.Grievance;
import com.divyapath.model.User;

@Transactional 
@Service
public class GrievanceServiceImpl implements GrievanceService {
	
	@Autowired
	private GrievanceDao grievDao; 
	@Autowired
	private UserDao userDao; 

	@Override
	public void add(Grievance griev) {
		grievDao.save(griev); 
	}
 
	@Override
	public Grievance getById(int id) {
		Optional<Grievance> opt = grievDao.findById(id);
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
	}

	@Override
	public List<Grievance> getAll() {
		Iterable<Grievance> itr = grievDao.findAll();
		List<Grievance> lst = new ArrayList<Grievance>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}
  
	@Override
	public void editById(int gid) {
		grievDao.updateStatus(gid); 
		
	}

	@Override
	public List<Grievance> getGrievEmail(@PathVariable String email) {
		return  grievDao.findbyEmailId(email); 
	}

	@Override
	public List<Grievance> getByStatus() { 
		return grievDao.findByStatus();
	}
 
}

	 