package com.fullTodo.rest.basic;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//Controller
@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class BasicAuthenticationController {

    @GetMapping(path = "/basicauth")
    public AuthenticationBean AuthenticationBean() {
        // throw new RuntimeException("Some error has Happened! Contact support @(***)***-****");
        return new AuthenticationBean("You are Authenticated");
    }

}
