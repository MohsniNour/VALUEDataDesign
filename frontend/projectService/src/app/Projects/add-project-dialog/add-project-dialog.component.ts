import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project/project';
import { ProjectService } from 'src/app/service/project/project.service';

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.css']
})
export class AddProjectDialogComponent implements OnInit {

  project : Project = new Project();
  constructor(private projectService : ProjectService) { }

  ngOnInit(): void {
  }

  saveProject(){
    this.projectService.addProject(this.project).subscribe(data => {
      console.log(data);
    })
  }

  onSubmit(){
    console.log(this.project);
    this.saveProject();
    location.reload();
  }

}
