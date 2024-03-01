package com.hexa.Career_Portal;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ProjectCricket1Application {

	public static void main(String[] args) {
		SpringApplication.run(ProjectCricket1Application.class, args);
	}
	@Bean
    public ModelMapper getModelMapper() { 
        return new ModelMapper(); 
    } 

}
