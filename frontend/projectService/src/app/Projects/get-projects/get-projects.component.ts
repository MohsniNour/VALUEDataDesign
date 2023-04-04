import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/service/project/project.service';
import { Project} from '../../model/project/project';
@Component({
  selector: 'app-get-projects',
  templateUrl: './get-projects.component.html',
  styleUrls: ['./get-projects.component.css']
})
export class GetProjectsComponent implements OnInit {
  
  searchValue: string = '';
  projects !: Project [];

  constructor(private projectService : ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  private getProjects(){
    this.projectService.getProjectList().subscribe(data =>{
      this.projects = data;
    });
  }
  deleteProject(id:number){
    this.projectService.deleteProject(id).subscribe();
    location.reload();
  }
  
}
