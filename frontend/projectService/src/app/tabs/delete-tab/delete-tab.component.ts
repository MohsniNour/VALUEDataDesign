import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Attribute } from 'src/app/model/Attribute/attribute';
import { AttributeService } from 'src/app/service/Attribute/attribute.service';
import { TabService } from 'src/app/service/tab/tab.service';

@Component({
  selector: 'app-delete-tab',
  templateUrl: './delete-tab.component.html',
  styleUrls: ['./delete-tab.component.css']
})
export class DeleteTabComponent implements OnInit {

  attributeList !: Attribute [];
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private TabService : TabService, private attributeService : AttributeService, private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log(this.data)
    this.attributeService.getAttributeListByIdTab(this.data.tab.idTable).subscribe(data => {
      this.attributeList=data;
    })
  }

  deleteTab(){
    if(this.attributeList.length==0){
      this.TabService.deleteTab(this.data.tab.idTable).subscribe(data => {
        console.log(data);
      })
    }else{
      this.attributeList.forEach(attribute => {
        this.attributeService.deleteAttribute(attribute.idAttribute).subscribe(data => {
          console.log(data);
        })
      });
      this.TabService.deleteTab(this.data.tab.idTable).subscribe(data => {
        console.log(data);
      })
    } 
  }

  onSubmit(){
    this.deleteTab();
    console.log(this.data)
    this.showNotification()
  }

  showNotification() {
    this.toastr.error('Tab deleted successfully');
    setTimeout(() => {
      // window.location.reload(); // Reload the page after a delay
      history.back()
    }, 1000); // Delay in milliseconds (e.g., 2000 milliseconds = 2 seconds)
  }


}
