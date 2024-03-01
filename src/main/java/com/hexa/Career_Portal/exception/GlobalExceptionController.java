package com.hexa.Career_Portal.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionController extends ResponseEntityExceptionHandler {
	 
	@ExceptionHandler(ResourceNotFoundException.class)
 	public ResponseEntity<ErrorDetails> handleResourceNotFoundException(ResourceNotFoundException e, WebRequest w)
 	{
 		ErrorDetails er= new ErrorDetails(LocalDateTime.now(),e.getMessage(),w.getDescription(false),"Not_found");
 		return new ResponseEntity<>(er,HttpStatus.NOT_FOUND);
 	}
}
