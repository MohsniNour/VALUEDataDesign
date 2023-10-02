import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  dataSource!: MatTableDataSource<Project>;
  lastUpdateList : any[] = [];
  

  constructor(private projectService : ProjectService,private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getProjects();
  }

  private getProjects(){
    const systemDate = new Date();
    this.projectService.getProjectList().subscribe(data =>{
      this.projects = data;
      this.dataSource = new MatTableDataSource(this.projects);
      this.projects.forEach(obj => {
        if (!(obj.lastUpdatedDate instanceof Date)) {
          obj.lastUpdatedDate = new Date(obj.lastUpdatedDate);
        }
          const differenceInMilliseconds = systemDate.getTime()-obj.lastUpdatedDate.getTime();
          const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
          obj.order = differenceInDays;
        if (!isNaN(obj.lastUpdatedDate.getTime())) {
          obj.formattedDate = this.datePipe.transform(obj.lastUpdatedDate, 'EEEE d MMMM yyyy HH:mm');
        }

      });
      this.dataSource = new MatTableDataSource(this.projects.sort((a, b) =>b.lastUpdatedDate.getTime() - a.lastUpdatedDate.getTime()).slice(0, 5));
     
      console.log(this.lastUpdateList)
      console.log(this.dataSource)
      console.log(this.projects)
  });
  }
  applyFilter() {
    const filterValue = this.search.toString().toLowerCase();
    this.dataSource = new MatTableDataSource(this.projects.sort((a, b) =>b.lastUpdatedDate.getTime() - a.lastUpdatedDate.getTime()).slice(0, 5).filter(obj => obj.name.includes(filterValue)));
      
  }}
