package com.hexa.Career_Portal.entity;

import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="event")
public class Event {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	private String description;
	@CreationTimestamp
	private Date date;
	private String location;
	private int maxAttendees;
	private int registrationFees;
	public Event() {
		super();
	}
	public Event(Long id, String title, String description, Date date, String location, int maxAttendees,
			int registrationFees) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.date = date;
		this.location = location;
		this.maxAttendees = maxAttendees;
		this.registrationFees = registrationFees;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
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
		return "Event [id=" + id + ", title=" + title + ", description=" + description + ", date=" + date
				+ ", location=" + location + ", maxAttendees=" + maxAttendees + ", registrationFees=" + registrationFees
				+ "]";
	}
	

}
