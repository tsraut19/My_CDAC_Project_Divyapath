package com.divyapath.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.divyapath.model.Places;
 

@Repository 
public interface PlacesDao extends JpaRepository<Places, Integer> {
	
}
	
 
