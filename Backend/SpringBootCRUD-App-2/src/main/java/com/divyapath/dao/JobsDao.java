package com.divyapath.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.divyapath.model.Jobs;

@Repository
public interface JobsDao extends JpaRepository<Jobs, Integer> {

	@Query(value= "select * from jobs where lastDateToApply >= CURRENT_DATE()", nativeQuery = true)
	List<Jobs> getJobList();
	
	
//	@Query(value="SELECT * FROM grievance WHERE  email =:email", nativeQuery = true)
//	public List<Grievance> findbyEmailId(@Param(value = "email") String email);
//	
//	@Query(value = "select * from grievance  where status = 'Pending' ", nativeQuery = true)
//	public List<Grievance> findByStatus();
//	
	
}
