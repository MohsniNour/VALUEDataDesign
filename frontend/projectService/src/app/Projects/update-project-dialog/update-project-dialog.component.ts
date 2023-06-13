import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from 'src/app/model/project/project';
import { ProjectService } from 'src/app/service/project/project.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-update-project-dialog',
  templateUrl: './update-project-dialog.component.html',
  styleUrls: ['./update-project-dialog.component.css']
})
export class UpdateProjectDialogComponent implements OnInit {

  project : Project = new Project();
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private projectService : ProjectService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.project=this.data.project;
  }
  
  updateProject(){
    this.projectService.updateProject(this.project).subscribe(data => {
      console.log(data);
    })
  }
  onSubmit(){
    console.log(this.project);
    this.updateProject();
    this.showNotification()
  }

  showNotification() {
    this.toastr.success('project updated successfully');
    setTimeout(() => {
      window.location.reload(); // Reload the page after a delay
    }, 1000); // Delay in milliseconds (e.g., 2000 milliseconds = 2 seconds)
  }

}
