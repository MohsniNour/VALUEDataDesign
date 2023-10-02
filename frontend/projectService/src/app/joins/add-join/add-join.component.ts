import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tab } from 'src/app/model/tab/tab';
import { TabService } from 'src/app/service/tab/tab.service';
import { Join } from 'src/app/model/join/join';
import { JoinService } from 'src/app/service/join/join.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-join',
  templateUrl: './add-join.component.html',
  styleUrls: ['./add-join.component.css']
})
export class AddJoinComponent implements OnInit {

  // disableSelect = new FormControl(false);
  id !: number;
  tabs!: Tab[];
  join :Join = new Join();
  join2  :Join = new Join();
  value!: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private joinService: JoinService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.tabs = this.data.tabs;
    this.id=this.data.id;
    console.log(this.data)
    console.log(this.join)
  }

  saveJoin(){
    this.joinService.addJoin(this.join).subscribe(data => {
      console.log(data);
    })
    // const tab1= this.join.bindingTable;
    this.join2.bindingTable=this.join.boundTable;
    this.join2.boundTable=this.join.bindingTable;
    this.join2.value=this.value;
    this.joinService.addJoin(this.join2).subscribe(data => {
      console.log(data);
    })

  }

  onSubmit(){
    // console.log(this.project);
    this.saveJoin();
    this.showNotification()
  }
  showNotification() {
    this.toastr.success('new relations added successfully');
    setTimeout(() => {
      window.location.reload(); // Reload the page after a delay
    }, 1000); // Delay in milliseconds (e.g., 2000 milliseconds = 2 seconds)
  }

}
