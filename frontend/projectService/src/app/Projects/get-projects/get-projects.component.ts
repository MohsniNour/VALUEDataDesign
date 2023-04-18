import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/service/project/project.service';
import { Project} from '../../model/project/project';
import { AddProjectDialogComponent } from '../add-project-dialog/add-project-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-get-projects',
  templateUrl: './get-projects.component.html',
  styleUrls: ['./get-projects.component.css']
})
export class GetProjectsComponent implements OnInit {
  
  searchValue: string = '';
  projects !: Project [];
  

  constructor(private projectService : ProjectService, private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.getProjects();
  }

  private getProjects(){
    this.projectService.getProjectList().subscribe(data =>{
      this.projects = data;
    });
  }
  deleteProject(id:number){
    if(confirm('Are you sure to delete this project ?'))
    this.projectService.deleteProject(id).subscribe();
    location.reload();
  }

  openDialog(){
    this.matDialog.open(AddProjectDialogComponent,{
      width:'700px', 
      height:'280px',
      panelClass: ['animate__animated'],
    });
  }

 
  
}
