
package com.divyapath.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.divyapath.model.Grievance;
import com.divyapath.model.User;
 
@Transactional
@Repository 
public interface GrievanceDao extends JpaRepository<Grievance, Integer> {
	
	@Modifying
	@Query(value = "update grievance set status='Resolved' where gid =:gid ", nativeQuery = true)
	public void updateStatus(@Param(value = "gid") Integer gid);
	
	@Query(value="SELECT * FROM grievance WHERE  email =:email", nativeQuery = true)
	public List<Grievance> findbyEmailId(@Param(value = "email") String email);
	
	@Query(value = "select * from grievance  where status = 'Pending' ", nativeQuery = true)
	public List<Grievance> findByStatus();
}
