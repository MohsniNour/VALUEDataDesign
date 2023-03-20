package com.tn.value.projectService.repositories;


import com.tn.value.projectService.entities.Tab;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TabRepository extends JpaRepository<Tab, Long> {


}
