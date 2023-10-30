package com.tn.value.projectService.service.Implementation;

import com.tn.value.projectService.entity.User;
import com.tn.value.projectService.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private IUserService userService;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.loadUserByUserName(username);
        Collection<GrantedAuthority> authorityCollections = new ArrayList<>();
        return new org.springframework.security.core.userdetails.User(user.getUserName(),user.getPassword(),authorityCollections);

    }
}
