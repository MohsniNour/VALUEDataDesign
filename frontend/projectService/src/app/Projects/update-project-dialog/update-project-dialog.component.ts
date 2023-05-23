import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from 'src/app/model/project/project';
import { ProjectService } from 'src/app/service/project/project.service';

@Component({
  selector: 'app-update-project-dialog',
  templateUrl: './update-project-dialog.component.html',
  styleUrls: ['./update-project-dialog.component.css']
})
export class UpdateProjectDialogComponent implements OnInit {

  project : Project = new Project();
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private projectService : ProjectService) { }

  ngOnInit(): void {
    this.project=this.data.project;
  }

  updateProject(){
    this.projectService.updateProject(this.project).subscribe(data => {
      console.log(data);
    })
  }

  onSubmit(){
    // if(confirm('Are you sure you want to update this project ?'))
    console.log(this.project);
    this.updateProject();
    location.reload();
  }

}
