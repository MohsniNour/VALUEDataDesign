package com.tn.value.projectService;

import com.tn.value.projectService.entity.Model;
import com.tn.value.projectService.entity.Project;
import com.tn.value.projectService.entity.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.web.client.RestTemplate;

import java.util.HashSet;
import java.util.Set;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ProjectServiceApplicationTests {

	/*
	@LocalServerPort
	private int port;
	private String baseUrl="http://localhost";
	private static RestTemplate restTemplate;
	@Autowired
	private TestH2Repository h2Repository;
	@BeforeAll
	public static void init(){
		restTemplate = new RestTemplate();
	}
	@BeforeEach
	public void setUP(){
		baseUrl=baseUrl.concat(":").concat(port+"").concat("/projects");
	}

	@Test
	public void testAddProject(){
		Long id = new Long(1);
		User user=new User(id,"nour","nour@value.com","azerty");
		Set<Model> models = new HashSet<>();
		Project project = new Project(id,"proj3",user,models);
		Project response = restTemplate.postForObject(baseUrl,project,Project.class);
		//Assertions.assertEquals("nour",response.getName());
	}
	*/
	@Test
	void contextLoads() {
	}

}
