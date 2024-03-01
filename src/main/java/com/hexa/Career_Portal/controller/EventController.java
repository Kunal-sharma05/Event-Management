package com.hexa.Career_Portal.controller;



import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexa.Career_Portal.dto.EventDTO;
import com.hexa.Career_Portal.exception.ResourceNotFoundException;
import com.hexa.Career_Portal.service.IEventService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/events")
public class EventController {
	
	
	@Autowired
	private IEventService eventService;
	
	
	@GetMapping
	public ResponseEntity<List<EventDTO>> getAll() throws ResourceNotFoundException
	{
		List<EventDTO> eventDtos=eventService.getAllEvent();
		if(!eventDtos.isEmpty())
        {
        	return ResponseEntity.ok(eventDtos); 
        }
        else
        {
        	throw new ResourceNotFoundException("users is not found");
        }
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<EventDTO> findById(@PathVariable Long id) throws ResourceNotFoundException
	{
		EventDTO updatedEventDTO=eventService.getEvent(id);
		if(updatedEventDTO!=null)
		{
        	return ResponseEntity.ok(updatedEventDTO);
        }
        else
        {
        	
        	throw new ResourceNotFoundException("user is not found");
        }
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id)
	{
		eventService.deleterEvent(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<EventDTO> update(@PathVariable Long id,@RequestBody EventDTO eventDTO) throws ResourceNotFoundException
	{
		EventDTO updatedEventDTO=eventService.updateEvent(id,eventDTO);
		if(updatedEventDTO!=null) {
        	return ResponseEntity.ok(updatedEventDTO);
        }
        else
        {
        	throw new ResourceNotFoundException("user is not found");
        }
		
	}
	
	@PostMapping
	public ResponseEntity<EventDTO> post(@RequestBody EventDTO eventDTO)
	{
		EventDTO updatedEventDTO=eventService.createEvent(eventDTO);
		return new ResponseEntity<>(updatedEventDTO, HttpStatus.CREATED);

	}
}

