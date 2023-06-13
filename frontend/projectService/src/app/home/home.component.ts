import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project/project';
import { ProjectService } from '../service/project/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  search !:any;
  projects !: Project [];
  compare!: any;
  displayedColumns = ['name', 'date','lastUpdate'];
  dataSource = this.projects;
  lastUpdateList : any[] = [];
  

  constructor(private projectService : ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  private getProjects(){
    const systemDate = new Date();
    this.projectService.getProjectList().subscribe(data =>{
      this.projects = data;
      this.projects.forEach(obj => {
        if (!(obj.lastUpdatedDate instanceof Date)) {
          obj.lastUpdatedDate = new Date(obj.lastUpdatedDate);
        }
          const differenceInMilliseconds = systemDate.getTime()-obj.lastUpdatedDate.getTime();
          const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
          obj.order = differenceInDays;
      });
      this.dataSource = this.projects.sort((a, b) =>b.lastUpdatedDate.getTime() - a.lastUpdatedDate.getTime()).slice(0, 5);
      // const t2 = new Date((b.lastUpdatedDate).toLocaleString('default', { month: 'short' })).getTime();
      // const t3 = new Date((a.lastUpdatedDate).toLocaleString('default', { month: 'short' })).getTime();
      // const dateDiff = t3 - t2
      // console.log(t2);
      // console.log(t3);
      // console.log(dateDiff);
      // if (dateDiff !== 0) 
      // return dateDiff;
      // return dateDiff;
     
      console.log(this.lastUpdateList)
      console.log(this.dataSource)
      console.log(this.projects)
  });
  
  

  }}
