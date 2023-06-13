import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Attribute } from 'src/app/model/Attribute/attribute';
import { Tab } from 'src/app/model/tab/tab';
import { AttributeService } from 'src/app/service/Attribute/attribute.service';
import { TabService } from 'src/app/service/tab/tab.service';

@Component({
  selector: 'app-get-tab',
  templateUrl: './get-tab.component.html',
  styleUrls: ['./get-tab.component.css'],
  
})
export class GetTabComponent implements OnInit {

  id !: number;
  idModel!:number;
  attributes!: Attribute[] ;
  tab : Tab = new Tab();
  tabs !: Tab [];
  displayedColumns = ['name', 'description', 'type', 'lengthAttribute', 'decimalAttribute', 'requiredAttribute', 'PKey', 'FKey', 'tag'];
  dataSource = this.attributes;
  search !:any;
  

  constructor(private tabService: TabService,private attributeService: AttributeService, private route: ActivatedRoute, private matDialog:MatDialog) {  }

  ngOnInit(): void {
    this.getattributesByIdTab();
    console.log(this.dataSource)
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

  private getattributesByIdTab(){
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.attributeService.getAttributeListByIdTab(this.id).subscribe(data =>{
      this.dataSource = data;
      console.log(this.attributes)
    });
  }


}
