import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../model/project/project';
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
  

  constructor(private projectService : ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.getProjects();
    
  }

  private getProjects(){
    this.menuList = [{text:"Projects",children:[]}];
    this.projectService.getProjectList().subscribe(data =>{
      this.projects = data;
      
    });
  }

  showProject(){
    console.log("list project shown *******")
    console.log(this.projects)
    this.router.navigateByUrl('/Projects')
  }
  

}
