package com.hexa.Career_Portal.service;

import java.util.List;

import com.hexa.Career_Portal.dto.EventDTO;


public interface IEventService {

	public EventDTO createEvent(EventDTO eventDTO);
	//get
	public EventDTO getEvent(Long eventId);
	//Delete
	public void deleterEvent(Long playerId );
	//Get all
	public List<EventDTO> getAllEvent();
	//update
	EventDTO updateEvent(Long id, EventDTO EventDTO);
}
