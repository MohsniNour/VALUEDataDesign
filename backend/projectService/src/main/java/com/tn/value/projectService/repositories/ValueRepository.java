package com.tn.value.projectService.repositories;

import com.tn.value.projectService.entities.Value;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ValueRepository extends JpaRepository<Value, Long> {
}
