import { Component, OnInit,ViewChild, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Model } from 'src/app/model/model/model';
import { Project } from 'src/app/model/project/project';
import { Tab } from 'src/app/model/tab/tab';
import { ModelService } from 'src/app/service/model/model.service';
import { TabService } from 'src/app/service/tab/tab.service';
import { UpdateModelDialogComponent } from '../update-model-dialog/update-model-dialog.component';
import { CdkDragEnd, CdkDragStart } from '@angular/cdk/drag-drop';
import { AddJoinComponent } from 'src/app/join/add-join/add-join.component';
import {jsPlumb} from 'jsplumb';

interface Line {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}


@Component({
  selector: 'app-get-model',
  templateUrl: './get-model.component.html',
  styleUrls: ['./get-model.component.css']
})
export class GetModelComponent implements OnInit{

  idProject !: number;
  id !: number;
  project : Project = new Project();
  model : Model = new Model();
  tabs !: Tab [];
  search !:any;

  nodes = [
    { id: '1', label: 'Class 1', width: 120, height: 50 },
    { id: '2', label: 'Class 2', width: 120, height: 50 },
    // Add more nodes as needed
  ];

  links = [
    { source: '1', target: '2' },
    // Add more links as needed
  ];

  constructor(private modelService : ModelService, private tabService: TabService, private route: ActivatedRoute, private matDialog:MatDialog,private renderer: Renderer2) { }

  ngOnInit(): void {
    // const instance = jsPlumb.getInstance({});
    // instance.setContainer('diagram');
    // instance.bind('ready', () => {
    //   instance.addEndpoint('control1', {
    //     endpoint: 'Dot',
    //     anchor: ['RightMiddle'],
    //     isSource: true,
    //     maxConnections: 5 // Set the desired value for maxConnections
    //   });
    //   instance.addEndpoint('control2', {
    //     endpoint: 'Dot',
    //     anchor: ['LeftMiddle'],
    //     isTarget: true,
    //     maxConnections: 5 // Set the desired value for maxConnections
    //   });
    // });
    this.getModelById();
    this.getTabsByIdModel();
    console.log("tabs"+this.tabs);
  }

  private getModelById(){
    this.id = this.route.snapshot.params['id'];
    this.modelService.getModelById(this.id).subscribe( data =>{
      this.model=data;
      console.log(this.project);
    });
    
  }

  private getTabsByIdModel(){
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.tabService.getTabListByIdModel(this.id).subscribe(data =>{
      this.tabs = data;
      console.log(this.tabs)
    });
  }

  openUpdateDialog(){
    this.matDialog.open(UpdateModelDialogComponent,{
      width:'620px', 
      height:'250px',
      panelClass: ['animate__animated'],
      data:{
        model:this.model
      }
    })
  }

  openDeleteDialog(){
    this.matDialog.open(UpdateModelDialogComponent,{
      width:'620px', 
      height:'250px',
      panelClass: ['animate__animated'],
      data:{
        model:this.model
      }
    })
  }

  openDialog(){
    this.matDialog.open(AddJoinComponent,{
      width:'560px', 
      height:'490px',
      panelClass: ['animate__animated'],
      data:{
        id:this.id,
        tabs: this.tabs
      }
    });
  }
}
