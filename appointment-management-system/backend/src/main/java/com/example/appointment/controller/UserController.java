package com.example.appointment.controller;

import com.example.appointment.dto.LoginRequest;
import com.example.appointment.dto.JwtResponse;
import com.example.appointment.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public JwtResponse login(@RequestBody LoginRequest loginRequest) {
        String token = userService.authenticate(loginRequest.getUsername(), loginRequest.getPassword());
        return new JwtResponse(token);
    }
    @PostMapping("/register")
    public void register(@RequestBody LoginRequest registerRequest) {
        userService.register(registerRequest.getUsername(), registerRequest.getPassword());
    }
}
