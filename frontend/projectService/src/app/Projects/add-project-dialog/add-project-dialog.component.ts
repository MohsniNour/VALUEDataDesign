import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project/project';
import { ProjectService } from 'src/app/service/project/project.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.css']
})
export class AddProjectDialogComponent implements OnInit {

  project : Project = new Project();
  projectList!: Project[];
  constructor(private projectService : ProjectService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.projectService.getProjectList().subscribe(data =>{
      this.projectList = data;
      console.log(this.projectList)
    });
  }

  saveProject(){
        this.projectService.addProject(this.project).subscribe(data => {
          console.log(data);
        })
      }

  onSubmit() {
    const isProjectNameExist = this.projectList.some(obj => obj.name === this.project.name);
    if (isProjectNameExist) {
      this.showNotificationError();
    } else {
      this.saveProject();
      this.showNotification();
    }
  }

  showNotification() {
    this.toastr.success('New project added successfully');
    setTimeout(() => {
      window.location.reload(); // Reload the page after a delay
    }, 1000); // Delay in milliseconds (e.g., 2000 milliseconds = 2 seconds)
  }

  showNotificationError() {
    this.toastr.error('project name existe');
  }

}
