package com.divyapath.cntr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.divyapath.model.Jobs;
import com.divyapath.service.JobsService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/jobs-admin")
public class JobsController {

	@Autowired
	private JobsService jobsService;
	
	@PostMapping(value = {"/add-job"})
	public String jobAdd(@RequestBody Jobs job) {
		jobsService.add(job);
		return "successs";
	}
	
//	@GetMapping(value = {"/get-list"})
//	public List<Jobs> JobList(){
//		return jobsService.getAll();
//	}
	
	@GetMapping(value = {"/get-job-list"})
	public List<Jobs> getJobList(){
		return jobsService.getJobList();
	}

	@DeleteMapping(value = {"delete-job/{jid}"})
	public String jobDelete(@PathVariable int jid) {
		System.out.println("job  deleted");
		jobsService.removeById(jid);
		return "success";
	}
}
