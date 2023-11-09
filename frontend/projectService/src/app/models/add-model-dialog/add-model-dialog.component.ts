import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Model } from 'src/app/model/model/model';
import { ModelService } from 'src/app/service/model/model.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-model-dialog',
  templateUrl: './add-model-dialog.component.html',
  styleUrls: ['./add-model-dialog.component.css']
})
export class AddModelDialogComponent implements OnInit {

  model : Model = new Model();
  id!:number;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private modelService : ModelService,private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  saveModel(){
    this.modelService.addModel(this.model,this.data.id).subscribe(data => {
      console.log(data);
    })
  }

  onSubmit(){
    console.log(this.model);
    this.saveModel();
    this.showNotification()
  }

  showNotification() {
    this.toastr.success('new model added successfully');
    setTimeout(() => {
      window.location.reload(); 
    }, 1000); 
  }

}
