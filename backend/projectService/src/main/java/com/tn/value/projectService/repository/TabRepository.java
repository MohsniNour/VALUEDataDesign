package com.tn.value.projectService.repository;


import com.tn.value.projectService.entity.Tab;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TabRepository extends JpaRepository<Tab, Long> {


}
