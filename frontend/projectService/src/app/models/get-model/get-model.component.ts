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
import { AddJoinComponent } from 'src/app/joins/add-join/add-join.component';
import {jsPlumb} from 'jsplumb';
import { AddTabDialogComponent } from 'src/app/tabs/add-tab-dialog/add-tab-dialog.component';
import { Attribute } from 'src/app/model/Attribute/attribute';
import { AttributeService } from 'src/app/service/attribute/attribute.service';
import { DeleteModelDialogComponent } from '../delete-model-dialog/delete-model-dialog.component';


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
  attributes !: Attribute [];
  search !:any;
  dataSource= [this.tabs,this.attributes]

  constructor(private modelService : ModelService, private tabService: TabService, private attributeService: AttributeService,private route: ActivatedRoute, private matDialog:MatDialog,private renderer: Renderer2) { }

  ngOnInit(): void {
    this.getModelById();
    this.getTabsByIdModel();
    this.getAttributeList();
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
  //  getAttributesByIdTab(id:number){
  //    this.attributeService.getAttributeListByIdTab(id).subscribe(data =>{
  //     this.attributes = data;
  //     console.log(this.attributes)
  //   });
  //   return this.attributes.slice(0, 1)
  // }
  getAttributeList(){
    this.attributeService.getAttributeList().subscribe(data =>{
     this.attributes = data;
     console.log(this.attributes)
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
    this.matDialog.open(DeleteModelDialogComponent,{
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
      height:'390px',
      panelClass: ['animate__animated'],
      data:{
        id:this.id,
        tabs: this.tabs
      }
    });
  }
  addTabDialog(){
    this.matDialog.open(AddTabDialogComponent,{
      width:'620px', 
      height:'250px',
      panelClass: ['animate__animated'],
    });
  }
}
