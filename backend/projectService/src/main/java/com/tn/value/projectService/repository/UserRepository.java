package com.tn.value.projectService.repository;

import com.tn.value.projectService.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface UserRepository extends JpaRepository<User, Long> {

  User findByEmail(String email);
  User findByUserName(String username);
}
