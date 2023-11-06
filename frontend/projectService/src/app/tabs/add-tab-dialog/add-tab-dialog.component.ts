import { Component,Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Attribute } from 'src/app/model/Attribute/attribute';
import { Tab } from 'src/app/model/tab/tab';
import { AttributeService } from 'src/app/service/Attribute/attribute.service';
import { TabService } from 'src/app/service/tab/tab.service';

@Component({
  selector: 'app-add-tab-dialog',
  templateUrl: './add-tab-dialog.component.html',
  styleUrls: ['./add-tab-dialog.component.css']
})
export class AddTabDialogComponent implements OnInit {

  tab : Tab = new Tab();
  newTab !: any;
  tabs !: Tab[];
  attribute : Attribute = new Attribute();
  idModel!:number;
  idProject!:number;

  constructor(private tabService : TabService, private route: ActivatedRoute,private attributeService : AttributeService,private toastr: ToastrService,private router : Router) { }

  ngOnInit(): void {
    this.getTabsByIdModel()
  }

  private getTabsByIdModel(){
    this.idProject = this.route.snapshot.params['idProject'];
    this.idModel = this.route.snapshot.params['idModel'];
    console.log(this.idModel)
    this.tabService.getTabListByIdModel(this.idModel).subscribe(data =>{
      this.tabs = data;
      console.log(this.tabs)
    });
  }

  saveTab(){
    const tabExist = this.checkNameTabExist();
    console.log("existe value",tabExist);
    console.log("1");
    if(tabExist==false){
      this.tabService.addTab(this.tab,this.idModel).subscribe(data => {
        console.log(data);
        this.handleCheckboxEvent()
        console.log("2");
        console.log(data);
        this.newTab=data;
        this.attributeService.addAttribute(this.attribute,this.newTab.idTable).subscribe(data => {
          console.log(data);
        })
        this.showNotification()
      })
    }
    else{
      this.toastr.error('name Table existe');
    }
    this.saveAttribute(this.newTab)
  }

  handleCheckboxEvent(){
    if(this.attribute.PKey==null)
    {this.attribute.PKey=false}
    if(this.attribute.requiredAttribute==null)
    {this.attribute.requiredAttribute=false}
    if(this.attribute.FKey==null)
    {this.attribute.FKey=false}
  }

  saveAttribute(data:any){
    this.handleCheckboxEvent()
    console.log("2");
    console.log(data)
    this.attributeService.addAttribute(this.attribute,this.newTab.idTable).subscribe(data => {
      console.log(data);
    })
  }

  checkNameTabExist(): any{
    const existIndex = this.tabs.findIndex((tab) => tab.name==this.tab.name)
      if (existIndex===-1)
      {
        return false
      }
      else{
        return true;
      }
  }

  onSubmit(){
    this.saveTab();
  }

  showNotification() {
    this.toastr.success('new table added successfully');
    setTimeout(() => {
      this.router.navigateByUrl('/User/Projects/'+this.idProject+'/model/'+this.idModel);
    }, 1000);
  }

}
