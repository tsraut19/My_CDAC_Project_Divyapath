package com.divyapath.cntr;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.persistence.Lob;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.divyapath.dao.PlacesDao;
import com.divyapath.model.Places;
import com.divyapath.service.PlacesService;

@RestController
@CrossOrigin
public class PlacesController {
	
	@Autowired
	private PlacesService placesService;
	
	@Autowired
	private PlacesDao placesDao;
	
	@PostMapping(value = {"/place/add"}) 
	public String placeAdd(@RequestBody Places place) {
		placesService.add(place);
		return "success";
	}
	
	@PutMapping(value = {"/place/update"})
	public String placeUpdate(@RequestBody Places place) {
		placesService.modify(place);
		return "success";
	}
	  
	@DeleteMapping(value = {"/place/delete/{id}"})
	public String placeDelete1(@PathVariable int id) {
		System.out.println("place  deleted");
		placesService.removeById(id);
		return "success";
	}
	
	@GetMapping(value = {"/place/{id}"})
	public Places placeGet(@PathVariable int id) {
		return placesService.getById(id);
	}
	
	@GetMapping(value = {"/place"})
	public List<Places> placeList(){
		return placesService.getAll();
	}
	
//	 @PostMapping("/places/upload")
//	    public void uploadImage(@RequestParam("file") MultipartFile file,
//	                            @RequestParam("nameOfPlace") String nameOfPlace,
//	                            @RequestParam("description") String description,
//	                            @RequestParam("location") String location,
//	                            @RequestParam("linkOnMap") String linkOnMap) throws IOException {
//	        Places place = new Places();
//	        place.setNameOfPlace(nameOfPlace); 
//	        place.setDescription(description);
//	        place.setLocation(location);
//	        place.setLinkOnMap(linkOnMap);
//	        place.setImageData(file.getBytes());
//	        placesDao.save(place);
//	    }
//	 
	 
	    @GetMapping("/places/{id}")
	    public ResponseEntity<Places> getImage(@PathVariable Integer pid) {
	        Optional<Places> place = placesDao.findById(pid);
	        if (place.isPresent()) {
	            return ResponseEntity.ok().body(place.get());
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }

}
