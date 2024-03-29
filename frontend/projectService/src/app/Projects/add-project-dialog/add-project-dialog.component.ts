import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project/project';
import { ProjectService } from 'src/app/service/project/project.service';
import {ToastrService} from "ngx-toastr";
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.css']
})
export class AddProjectDialogComponent implements OnInit {

  project : Project = new Project();
  projectList!: Project[];
  constructor(private projectService : ProjectService, private toastr: ToastrService,private userService : UserService) { }

  ngOnInit(): void {
    this.projectService.getProjectList().subscribe(data =>{
      this.projectList = data;
      console.log(this.projectList)
    });
  }

  saveProject(){
    this.project.user=this.userService.connectedUser;
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
      window.location.reload(); 
    }, 1000);
  }

  showNotificationError() {
    this.toastr.error('project name existe');
  }

}
