package com.tn.value.projectService;

import com.tn.value.projectService.entity.Project;
import com.tn.value.projectService.repository.ProjectRepository;
import com.tn.value.projectService.service.Implementation.ProjectServiceImpl;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@ExtendWith(MockitoExtension.class)
public class ProjectServiceMockitoTest {

    @Mock
    ProjectRepository projectRepositoryMock;
    @InjectMocks
    ProjectServiceImpl projectService;

    Project project = Project.builder().name("p1").build();
    List<Project> projects = new ArrayList<Project>() {
        {
            add(Project.builder().name("p2").build());
            add(Project.builder().name("p3").build());
            add(Project.builder().name("p4").build());
        }
    };

    @Test
    public void testGetProject(){
        Mockito.when(projectRepositoryMock.findById(Mockito.anyLong())).thenReturn(Optional.of(project)); //find all
        Project project1 = projectService.getById(2L);
        Assertions.assertNotNull(project1);
        System.out.println("working get MOCKITO !");


    }
    @Test
    public void testAddProject() {
        Mockito.when(projectRepositoryMock.save(project)).thenReturn(project);
        Project project1 = projectService.add(project);
        Assertions.assertNotNull(project1);
        System.out.println("working add MOCKITO !");


    }

    @Test
    public void testGetAllProjects() {
        Mockito.when(projectRepositoryMock.findAll()).thenReturn(projects);
        List<Project> projectList = projectService.getAll();
        Assertions.assertNotNull(projectList);
        System.out.println("working getAll MOCKITO !");

    }

    @Test
    public void tesUpdateProject() {
        project.setName("p22");
        Mockito.when(projectRepositoryMock.save(project)).thenReturn(project);
        Project project1 = projectService.update(project);
        Assertions.assertEquals(project1.getName(),project.getName());
        System.out.println("working update MOCKITO !");


    }

    @Test
    public void testDeleteProject() {
        Project project1 = Project.builder().name("project1").build();
        projectService.delete(project1.getIdProject());
        Mockito.verify(projectRepositoryMock).deleteById(project1.getIdProject());
        System.out.println("working delete MOCKITO !");


    }
}
