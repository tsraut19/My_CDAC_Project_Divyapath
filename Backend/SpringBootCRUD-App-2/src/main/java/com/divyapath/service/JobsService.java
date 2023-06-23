package com.divyapath.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.divyapath.model.Jobs;


@Service
public interface JobsService {

	void add(Jobs job); 
	void removeById(int jid);
	Jobs getById(int jid);
	// List<Jobs> getAll();
	List<Jobs> getJobList();
}
