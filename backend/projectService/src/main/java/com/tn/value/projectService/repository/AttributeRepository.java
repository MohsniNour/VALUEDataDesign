package com.tn.value.projectService.repository;

import com.tn.value.projectService.entity.TabAttribute;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttributeRepository extends JpaRepository<TabAttribute, Long> {
}
