package com.divyapath.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.divyapath.dao.JobsDao;
import com.divyapath.model.Jobs;

@Service
public class JobsServiceImpl implements JobsService{

	@Autowired
	private JobsDao jobsDao;

	@Override
	public void add(Jobs job) {
		jobsDao.save(job) ;
	} 

	@Override
	public void removeById(int jid) {
		jobsDao.deleteById(jid);
		
	}

	@Override
	public Jobs getById(int jid) {
		return null;
	}

//	@Override
//	public List<Jobs> getAll() {
//		Iterable<Jobs> itr = jobsDao.findAll();
//		List<Jobs> lst = new ArrayList<Jobs>();
//		itr.forEach(ele->lst.add(ele));
//		return lst;
//	}
//	
	@Override
	public List<Jobs> getJobList() {
		Iterable<Jobs> itr = jobsDao.findAll();
		List<Jobs> joblst = new ArrayList<Jobs>();
		itr.forEach(ele->joblst.add(ele));
		return joblst;
	}
	
}
