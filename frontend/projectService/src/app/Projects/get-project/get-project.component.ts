import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model } from 'src/app/model/model/model';
import { Project } from 'src/app/model/project/project';
import { ModelService } from 'src/app/service/model/model.service';
import { ProjectService } from 'src/app/service/project/project.service';
import { AddModelDialogComponent } from 'src/app/models/add-model-dialog/add-model-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProjectDialogComponent } from '../update-project-dialog/update-project-dialog.component';

@Component({
  selector: 'app-get-project',
  templateUrl: './get-project.component.html',
  styleUrls: ['./get-project.component.css']
})
export class GetProjectComponent implements OnInit {
  
  id !: number;
  project : Project = new Project();
  models !: Model [];

  constructor(private modelService : ModelService, private projectService: ProjectService, private route: ActivatedRoute,private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.getProjectById();
    this.getModelsByIdProject();
  }

  private getProjectById(){
    this.id = this.route.snapshot.params['id'];
    this.projectService.getProjectById(this.id).subscribe( data =>{
      this.project=data;
      console.log(this.project);
    });
    
  }

  private getModelsByIdProject(){
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.modelService.getModelListByIdProject(this.id).subscribe(data =>{
      this.models = data;
    });
  }

  deleteModel(id:number){
    if(confirm('Are you sure to delete this model ?'))
    this.modelService.deleteModel(id).subscribe();
    location.reload();
  }

  openAddDialog(){
    this.matDialog.open(AddModelDialogComponent,{
      width:'700px', 
      height:'280px',
      data:{
        id:this.id
      }
    })
  }
  
  openUpdateDialog(){
    this.matDialog.open(UpdateProjectDialogComponent,{
      width:'700px', 
      height:'280px',
      data:{
        project:this.project
      }
    })
  }

  

}
