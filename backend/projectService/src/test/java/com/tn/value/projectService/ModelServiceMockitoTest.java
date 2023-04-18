package com.tn.value.projectService;

import com.tn.value.projectService.entity.Model;
import com.tn.value.projectService.entity.Project;
import com.tn.value.projectService.repository.ModelRepository;
import com.tn.value.projectService.repository.ProjectRepository;
import com.tn.value.projectService.service.Implementation.ModelServiceImpl;
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
public class ModelServiceMockitoTest {

    @Mock
    ModelRepository modelRepositoryMock;
    @InjectMocks
    ModelServiceImpl modelService;

    Model model = Model.builder().nameModel("m1").build();
    List<Model> models = new ArrayList<Model>() {
        {
            add(Model.builder().nameModel("m2").build());
            add(Model.builder().nameModel("m3").build());
            add(Model.builder().nameModel("m4").build());
        }
    };

    @Test
    public void testGetProject(){
        Mockito.when(modelRepositoryMock.findById(Mockito.anyLong())).thenReturn(Optional.of(model)); //find all
        Model model1 = modelService.getById(2L);
        Assertions.assertNotNull(model1);
        System.out.println("working get MOCKITO !");


    }
    @Test
    public void testAddProject() {
        Mockito.when(modelRepositoryMock.save(model)).thenReturn(model);
        Model model1 = modelService.add(model);
        Assertions.assertNotNull(model1);
        System.out.println("working add MOCKITO !");


    }

    @Test
    public void testGetAllProjects() {
        Mockito.when(modelRepositoryMock.findAll()).thenReturn(models);
        List<Model> modelList = modelService.getAll();
        Assertions.assertNotNull(modelList);
        System.out.println("working getAll MOCKITO !");

    }

    @Test
    public void tesUpdateProject() {
        model.setNameModel("m22");
        Mockito.when(modelRepositoryMock.save(model)).thenReturn(model);
        Model model1 = modelService.update(model);
        Assertions.assertEquals(model1.getNameModel(),model.getNameModel());
        System.out.println("working update MOCKITO !");


    }

    @Test
    public void testDeleteProject() {
        Model model1 = Model.builder().nameModel("model1").build();
        modelService.delete(model1.getIdModel());
        Mockito.verify(modelRepositoryMock).deleteById(model1.getIdModel());
        System.out.println("working delete MOCKITO !");


    }
}
