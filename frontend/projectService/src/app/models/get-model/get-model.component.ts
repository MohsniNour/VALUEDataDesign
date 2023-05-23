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
    this.getModelById();
    this.getTabsByIdModel();
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
    });
  }

  openUpdateDialog(){
    this.matDialog.open(UpdateModelDialogComponent,{
      width:'700px', 
      height:'280px',
      data:{
        model:this.model
      }
    })
  }

  openDeleteDialog(){
    this.matDialog.open(UpdateModelDialogComponent,{
      width:'700px', 
      height:'280px',
      data:{
        model:this.model
      }
    })
  }

  @ViewChild('svgContainer', { static: true }) svgContainer!: ElementRef;
  isDrawing: boolean = false;
  startX: number = 0;
  startY: number = 0;
  endX: number = 0;
  endY: number = 0;

  startDrawing(event: MouseEvent, cardElement: HTMLElement): void {
    this.isDrawing = true;
    this.startX = event.clientX - cardElement.offsetLeft + cardElement.offsetWidth / 2;
    this.startY = event.clientY - cardElement.offsetTop + cardElement.offsetHeight / 2;
    console.log(this.startX,this.startY);
  }

  drawLine(event: MouseEvent): void {
    if (this.isDrawing) {
      const svgContainer = this.svgContainer.nativeElement;
      const svgRect = svgContainer.getBoundingClientRect();
      
      this.endX = event.clientX - svgRect.left;
      this.endY = event.clientY - svgRect.top;
    }
  }

  stopDrawing(): void {
    this.isDrawing = false;
  }
  log(line:any){
    console.log('line',line);
  }
}
