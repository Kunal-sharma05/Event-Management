package com.hexa.Career_Portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexa.Career_Portal.entity.Event;
@Repository
public interface EventRepository extends JpaRepository<Event,Long>  {

}
