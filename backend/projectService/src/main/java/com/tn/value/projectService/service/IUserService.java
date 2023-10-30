package com.tn.value.projectService.service;

import com.tn.value.projectService.entity.Project;
import com.tn.value.projectService.entity.User;

import java.util.List;

public interface IUserService {

    List<User> getAll();
    User getById(Long id);
    User addUser(User user);
    User loadUserByEmail(String email);
    User loadUserByUserName(String userName);


}
