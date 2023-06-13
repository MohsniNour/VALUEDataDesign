import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tab } from 'src/app/model/tab/tab';
import { TabService } from 'src/app/service/tab/tab.service';
import { Join } from 'src/app/model/join/join';

@Component({
  selector: 'app-add-join',
  templateUrl: './add-join.component.html',
  styleUrls: ['./add-join.component.css']
})
export class AddJoinComponent implements OnInit {

  disableSelect = new FormControl(false);
  id !: number;
  tabs!: Tab[];
  join :Join = new Join();
  value!: string;
  constructor(private tabService: TabService,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.tabs = this.data.tabs;
    this.id=this.data.id;
  }

  saveJoin(){
    // this.tabService..addModel(this.model,this.data.id).subscribe(data => {
    //   console.log(data);
    // })
  }


  onSubmit(){
    // console.log(this.project);
    // this.saveProject();
    location.reload();
  }

}
