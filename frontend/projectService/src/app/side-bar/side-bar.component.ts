import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from '../model/model/model';
import { Project } from '../model/project/project';
import { ModelService } from '../service/model/model.service';
import { ProjectService } from '../service/project/project.service';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {

  @Input() sideBarStatus : Boolean = false;
  projects !: Project [];
  menuList:any = [];
  models !: any [];
  modelList:any = [];
  panelOpenState = false;

  constructor(private projectService : ProjectService, private router: Router, private modelService : ModelService) { }

  ngOnInit(): void {
    this.getProjects();
    this.getModelList();
    // this.getModels(1);
    console.log(this.models); 
  }

  private getProjects(){
    this.menuList = [{text:"Projects",children:[]}];
    this.projectService.getProjectList().subscribe(data =>{
      this.projects = data;
      
    });
  }
  log(id:any){
    console.log("id " ,id)
  }

  // getModels(id:number){
  //   // this.modelList = [{text:"models",children:[]}];
  //   this.modelService.getModelListByIdProject(id).subscribe(data =>{
  //     this.models = data;
  //     //console.log("list model shown *******")
  //     //console.log(this.models);
  //   });
  //   // return this.models;
  // }
  private getModelList(){
    this.modelService.getModelList().subscribe(data =>{
      this.models = data;
      //console.log("list model shown *******")
      //console.log(this.models);
    });
    // return this.models;
  }

  showProject(){
    console.log("list project shown *******")
    console.log(this.projects)
    // console.log("list model shown *******")
    // console.log(this.models);
    this.router.navigateByUrl('/Projects')
  }

  showModel(){
    console.log("list model shown *******")
    console.log(this.models);
  }
  

}
