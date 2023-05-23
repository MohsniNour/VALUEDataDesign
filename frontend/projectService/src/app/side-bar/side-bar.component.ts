import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from '../model/model/model';
import { Project } from '../model/project/project';
import { ModelService } from '../service/model/model.service';
import { ProjectService } from '../service/project/project.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Input() sideBarStatus : Boolean = false;
  projects !: Project [];
  menuList:any = [];
  models !: Model [];
  modelList:any = [];
  

  constructor(private projectService : ProjectService, private router: Router, private modelService : ModelService) { }

  ngOnInit(): void {
    this.getProjects();
    this.getModels(1);
    console.log(this.models);
    
  }

  private getProjects(){
    this.menuList = [{text:"Projects",children:[]}];
    this.projectService.getProjectList().subscribe(data =>{
      this.projects = data;
      
    });
  }

  private getModels(id:number){
    this.modelList = [{text:"models",children:[]}];
    this.modelService.getModelListByIdProject(id).subscribe(data =>{
      this.models = data;
      
    });
  }

  showProject(){
    console.log("list project shown *******")
    console.log(this.projects)
    console.log(this.models);
    this.router.navigateByUrl('/Projects')
  }
  

}
