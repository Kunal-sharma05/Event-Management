package com.hexa.Career_Portal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hexa.Career_Portal.entity.User;



public interface UserRepository extends JpaRepository<User, Integer>{
	
	Optional<User> findByUsername(String username);

}