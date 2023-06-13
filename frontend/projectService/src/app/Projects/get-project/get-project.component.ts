import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model } from 'src/app/model/model/model';
import { Project } from 'src/app/model/project/project';
import { ModelService } from 'src/app/service/model/model.service';
import { ProjectService } from 'src/app/service/project/project.service';
import { AddModelDialogComponent } from 'src/app/models/add-model-dialog/add-model-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProjectDialogComponent } from '../update-project-dialog/update-project-dialog.component';
import { DeleteModelDialogComponent } from 'src/app/models/delete-model-dialog/delete-model-dialog.component';

@Component({
  selector: 'app-get-project',
  templateUrl: './get-project.component.html',
  styleUrls: ['./get-project.component.css']
})
export class GetProjectComponent implements OnInit {
  
  id !: number;
  project : Project = new Project();
  models !: Model [];
  search !:any;
  

  constructor(private modelService : ModelService, private projectService: ProjectService, private route: ActivatedRoute,private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.getProjectById();
    this.getModelsByIdProject();
    console.log(this.models)
    console.log(this.project.idProject)
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
      console.log(this.models)
    });
  }

  deleteModel(id:number){
    if(confirm('Are you sure to delete this model ?'))
    this.modelService.deleteModel(id).subscribe();
    location.reload();
  }

  deleteModelDialog(id:any){
    this.matDialog.open(DeleteModelDialogComponent,{
      data: id,
      width:'620px', 
      height:'140px',
      panelClass: ['animate__animated'],
    });
  }

  openAddDialog(){
    this.matDialog.open(AddModelDialogComponent,{
      width:'620px', 
      height:'250px',
      panelClass: ['animate__animated'],
      data:{
        id:this.id
      }
    })
  }
  
  openUpdateDialog(){
    this.matDialog.open(UpdateProjectDialogComponent,{
      width:'620px', 
      height:'250px',
      panelClass: ['animate__animated'],
      data:{
        project:this.project
      }
    })
  }

  

}
