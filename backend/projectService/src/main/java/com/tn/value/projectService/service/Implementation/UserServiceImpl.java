package com.tn.value.projectService.service.Implementation;

import com.tn.value.projectService.entity.User;
import com.tn.value.projectService.repository.ProjectRepository;
import com.tn.value.projectService.repository.UserRepository;
import com.tn.value.projectService.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User getById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}
