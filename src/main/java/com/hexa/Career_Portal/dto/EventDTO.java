package com.hexa.Career_Portal.dto;
import jakarta.validation.constraints.Size;


public class EventDTO {
	
	private Long id;
	@Size(min=2,message="Title cannot be less than 2")
	private String title;
	@Size(min=2,message="Title cannot be less than 2")
	private String description;
	@Size(min=2,message="Title cannot be less than 2")
	private String location;
	private int maxAttendees;
	private int registrationFees;
	public EventDTO() {
		super();
	}
	public EventDTO( String title, String description, String location, int maxAttendees,
			int registrationFees) {
		super();
		
		this.title = title;
		this.description = description;
		this.location = location;
		this.maxAttendees = maxAttendees;
		this.registrationFees = registrationFees;
	}
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public int getMaxAttendees() {
		return maxAttendees;
	}
	public void setMaxAttendees(int maxAttendees) {
		this.maxAttendees = maxAttendees;
	}
	public int getRegistrationFees() {
		return registrationFees;
	}
	public void setRegistrationFees(int registrationFees) {
		this.registrationFees = registrationFees;
	}
	@Override
	public String toString() {
		return "Event [ , title=" + title + ", description=" + description
				+ ", location=" + location + ", maxAttendees=" + maxAttendees + ", registrationFees=" + registrationFees
				+ "]";
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public EventDTO(Long id, @Size(min = 2, message = "Title cannot be less than 2") String title,
			@Size(min = 2, message = "Title cannot be less than 2") String description,
			@Size(min = 2, message = "Title cannot be less than 2") String location, int maxAttendees,
			int registrationFees) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.location = location;
		this.maxAttendees = maxAttendees;
		this.registrationFees = registrationFees;
	}
	

}