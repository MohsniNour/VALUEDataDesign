package com.tn.value.projectService.service.Implementation;

import com.tn.value.projectService.entity.User;
import com.tn.value.projectService.repository.ProjectRepository;
import com.tn.value.projectService.repository.UserRepository;
import com.tn.value.projectService.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

    UserRepository userRepository;

    private PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder=passwordEncoder;
    }

    @Override
    public List<User> getAll() {
        return  userRepository.findAll();
    }

    @Override
    public User getById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User addUser(User user) throws NullPointerException {
        String pw = user.getUserName();
        user.setPassword(passwordEncoder.encode(pw));
        return userRepository.save(user);
    }

    @Override
    public User loadUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User loadUserByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }
}
