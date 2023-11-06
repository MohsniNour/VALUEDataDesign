package com.tn.value.projectService.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tn.value.projectService.JWTUtil;
import com.tn.value.projectService.entity.User;
import com.tn.value.projectService.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.*;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RestController
public class UserRestController {
    @Autowired
    private IUserService userService;

    // http://localhost:8089/VALUE/users/getAll
    @GetMapping("/users/")
    @ResponseBody
    public List<User> getAll() { return userService.getAll(); }

    // http://localhost:8089/VALUE/users/getById/1
    @GetMapping("/users/getById/{id}")
    @ResponseBody
    public User getById(@PathVariable("id") Long id) {
        return userService.getById(id);
    }

    @PostMapping(path = "/register")
    public User saveUser(@RequestBody User user)
    {
        return userService.addUser(user);
    }
    @GetMapping(path = "/refreshToken")
    public void refreshToken(HttpServletRequest request,HttpServletResponse response) throws Exception{
        String authToken =request.getHeader(JWTUtil.AUTH_HEADER);
        if (authToken!=null && authToken.startsWith(JWTUtil.PREFIX)){
            try {
                String refreshToken = authToken.substring(7);
                Algorithm algorithm = Algorithm.HMAC256(JWTUtil.SECRET);
                JWTVerifier jwtVerifier = JWT.require(algorithm).build();
                DecodedJWT decodedJWT= jwtVerifier.verify(refreshToken);
                String userName =  decodedJWT.getSubject();
                String[] roles = decodedJWT.getClaim("roles").asArray(String.class);
                Collection<GrantedAuthority> authorities = new ArrayList<>();
                User user = userService.loadUserByUserName(userName);
                String jwtAccessToken = JWT.create().withSubject(user.getUserName())
                        .withExpiresAt(new Date(System.currentTimeMillis()+1*60*1000))
                        .withIssuer(request.getRequestURL().toString())
                        .withClaim("roles",authorities.stream().map(ga->ga.getAuthority()).collect(Collectors.toList()))
                        .sign(algorithm);
                Map<String,String> idToken = new HashMap<>();
                idToken.put("access-token",jwtAccessToken);
                idToken.put("refresh-token",refreshToken);
                response.setContentType("application/json");
                new ObjectMapper().writeValue(response.getOutputStream(),idToken);
            }catch (Exception e){
                throw e;
            }
        }
        else {
            throw new RuntimeException("Refresh token required");
        }
    }

    @GetMapping(path = "/profile")
    public User profile(Principal principal){
        return userService.loadUserByUserName(principal.getName());
    }
/*
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO)
    {
        LoginResponse loginResponse = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

 */
}
