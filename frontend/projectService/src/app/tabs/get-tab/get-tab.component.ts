import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddAttributeDialogComponent } from 'src/app/attributes/add-attribute-dialog/add-attribute-dialog.component';
import { DeleteAttributeComponent } from 'src/app/attributes/delete-attribute/delete-attribute.component';
import { UpdateAttributeDialogComponent } from 'src/app/attributes/update-attribute-dialog/update-attribute-dialog.component';
import { Attribute } from 'src/app/model/Attribute/attribute';
import { Tab } from 'src/app/model/tab/tab';
import { AttributeService } from 'src/app/service/Attribute/attribute.service';
import { TabService } from 'src/app/service/tab/tab.service';
import { UpdateTabDialogComponent } from '../update-tab-dialog/update-tab-dialog.component';
import { DeleteTabComponent } from '../delete-tab/delete-tab.component';
import jsPDF from 'jspdf';
import { TagService } from 'src/app/service/tag/tag.service';
import { Tag } from 'src/app/model/Tag/tag';
import { GetJoinsComponent } from 'src/app/joins/get-joins/get-joins.component';

@Component({
  selector: 'app-get-tab',
  templateUrl: './get-tab.component.html',
  styleUrls: ['./get-tab.component.css'],
  
})
export class GetTabComponent implements OnInit {

  @ViewChild('content',{static:false}) el!: ElementRef;
  id !: number;
  idModel!:number;
  attributes!: Attribute[] ;
  tags!: Tag[] ;
  tab : Tab = new Tab();
  tabs !: Tab [];
  attribute !: Attribute;
  displayedColumns = ['name', 'description', 'type', 'lengthAttribute', 'decimalAttribute', 'requiredAttribute', 'PKey', 'FKey', 'tag','actions'];
  dataSource = this.attributes;
  search !:any;
  

  constructor(private tabService: TabService,private attributeService: AttributeService,private tagService: TagService, private route: ActivatedRoute, private matDialog:MatDialog) {  }

  ngOnInit(): void {
    this.getTabById();
    this.getAttributesByIdTab();
    this.getTabsByIdModel();
    this.getTabById();
    console.log(this.id)
    console.log(this.idModel)
  }

  private getTabById(){
    this.id = this.route.snapshot.params['id'];
    this.tabService.getTabById(this.id).subscribe( data =>{
      this.tab=data;
      console.log(this.tab);
    });
  }
  
  private getTabsByIdModel(){
    this.idModel = this.route.snapshot.params['idModel'];
    console.log(this.idModel)
    this.tabService.getTabListByIdModel(this.idModel).subscribe(data =>{
      this.tabs = data;
    });
  }

  exportAttribute(){
    this.attributeService.exportAttributeListByIdTab(this.id);
  }

  exportAttributePDF(){
    
    let doc = new jsPDF("l","pt");
    doc.html(this.el.nativeElement,{
      callback:(pdf) =>{
        pdf.save("listAttribute"+this.tab.name+".pdf");
      }
    })
  }

  private getAttributesByIdTab(){
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.attributeService.getAttributeListByIdTab(this.id).subscribe(data =>{
      this.dataSource = data;
      console.log(this.dataSource)
    },
    error => {
      console.error('Error fetching data:', error);
    }
  );
  }
  
  openDialog(){
    this.matDialog.open(AddAttributeDialogComponent,{
      width:'860px', 
      height:'360px',
      panelClass: ['animate__animated'],
      data:{
        id:this.id,
        tab: this.tab
      }
    });
  }

  deleteAttributeDialog(id:any){
    this.matDialog.open(DeleteAttributeComponent,{
      data: id,
      width:'620px', 
      height:'140px',
      panelClass: ['animate__animated'],
    });
  }

  openUpdateDialog(){
    this.matDialog.open(UpdateTabDialogComponent,{
      width:'750px', 
      height:'250px',
      panelClass: ['animate__animated'],
      data:{
        tab:this.tab
      }
    })
  }

  openListJoinDialog(){
    this.matDialog.open(GetJoinsComponent,{
      width:'850px', 
      height:'460px',
      panelClass: ['animate__animated'],
      data:{
        tab:this.tab
      }
    })
  }
  openUpdateAttributeDialog(attribute:any){
    this.matDialog.open(UpdateAttributeDialogComponent,{
      width:'860px', 
      height:'360px',
      panelClass: ['animate__animated'],
      data:{
        attribute:attribute
      }
    })
  }

  openDeleteTabDialog(tab:any){
    this.matDialog.open(DeleteTabComponent,{
      width:'620px', 
      height:'170px',
      panelClass: ['animate__animated'],
      data:{
        tab:tab,
      }
    })
  }


}
