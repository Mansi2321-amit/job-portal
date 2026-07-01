package com.searchjob.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.searchjob.entity.User;
import com.searchjob.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // REGISTER
    public User registerUser(User user) {
        return userRepository.save(user);
    }

    // GET ALL USERS
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // 🔥 REQUIRED FOR LOGIN
    public Optional<User> getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}