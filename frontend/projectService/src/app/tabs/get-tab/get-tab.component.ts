import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddJoinComponent } from 'src/app/join/add-join/add-join.component';
import { Tab } from 'src/app/model/tab/tab';
import { AttributeService } from 'src/app/service/Attribute/attribute.service';
import { TabService } from 'src/app/service/tab/tab.service';

@Component({
  selector: 'app-get-tab',
  templateUrl: './get-tab.component.html',
  styleUrls: ['./get-tab.component.css']
})
export class GetTabComponent implements OnInit {

  id !: number;
  idModel!:number;
  tab : Tab = new Tab();
  tabs !: Tab [];
  ELEMENT_DATA = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;
  // dataSource = []

  constructor(private tabService: TabService,private attributeService: AttributeService, private route: ActivatedRoute, private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.getTabById();
    // console.log("rfffffffff"+this.tabs)
    this.getTabsByIdModel();
    console.log(this.idModel)
    console.log("rfffffffff"+this.tabs)
  }

  private getTabById(){
    this.id = this.route.snapshot.params['id'];
    this.tabService.getTabById(this.id).subscribe( data =>{
      this.tab=data;
      console.log(this.tab);
    });
  }
  openDialog(){
    this.matDialog.open(AddJoinComponent,{
      width:'700px', 
      height:'300px',
      panelClass: ['animate__animated'],
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


}
