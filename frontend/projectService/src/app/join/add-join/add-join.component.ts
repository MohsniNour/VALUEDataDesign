import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-join',
  templateUrl: './add-join.component.html',
  styleUrls: ['./add-join.component.css']
})
export class AddJoinComponent implements OnInit {

  disableSelect = new FormControl(false);

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    // console.log(this.project);
    // this.saveProject();
    location.reload();
  }

}
