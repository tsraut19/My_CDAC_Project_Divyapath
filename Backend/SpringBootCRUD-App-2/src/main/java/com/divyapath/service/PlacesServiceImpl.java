package com.divyapath.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.divyapath.dao.PlacesDao;
import com.divyapath.model.Places;

@Service 
public class PlacesServiceImpl implements PlacesService {
	
	@Autowired
	private PlacesDao placesDao;

	@Override
	public void add(Places place) {
		placesDao.save(place);
	}

	@Override
	public void modify(Places place) {
		 placesDao.save(place);
	}

	@Override
	public void removeById(int id) {
		placesDao.deleteById(id);
	}

	@Override
	public Places getById(int id) {
		Optional<Places> opt = placesDao.findById(id); // The findById method returns an Optional object that may or may not contain a Places object with the specified ID.
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
	}

	@Override
	public List<Places> getAll() {
		Iterable<Places> itr = placesDao.findAll(); // returns an Iterable object containing all the Places entities in the database.
		List<Places> lst = new ArrayList<Places>();
		itr.forEach(ele->lst.add(ele)); // a lambda expression to iterate over each element in the Iterable object and add it to the lst list.
		return lst;
	}
 
}
