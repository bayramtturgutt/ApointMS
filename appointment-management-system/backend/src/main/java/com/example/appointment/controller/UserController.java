package com.example.appointment.controller;

import com.example.appointment.dto.LoginRequest;
import com.example.appointment.dto.JwtResponse;
import com.example.appointment.service.UserService;
import com.example.appointment.util.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/login")
    public JwtResponse login(@RequestBody LoginRequest loginRequest) {
        String token = userService.authenticate(loginRequest.getUsername(), loginRequest.getPassword());
        return new JwtResponse(token);
    }
}
