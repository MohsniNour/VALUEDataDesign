import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService } from 'src/app/service/project/project.service';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private projectService : ProjectService) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  deleteProject(){
    this.projectService.deleteProject(this.data).subscribe(data => {
      console.log(data);
    })
  }

  onSubmit(){
    this.deleteProject();
    console.log(this.data)
    location.reload();
  }

}
