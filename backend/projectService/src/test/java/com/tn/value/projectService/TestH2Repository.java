package com.tn.value.projectService;

import com.tn.value.projectService.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestH2Repository extends JpaRepository<Project, Long> {
}
