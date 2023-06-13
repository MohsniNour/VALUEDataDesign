import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Model } from 'src/app/model/model/model';
import { ModelService } from 'src/app/service/model/model.service';

@Component({
  selector: 'app-update-model-dialog',
  templateUrl: './update-model-dialog.component.html',
  styleUrls: ['./update-model-dialog.component.css']
})
export class UpdateModelDialogComponent implements OnInit {

  model : Model = new Model();
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private modelService : ModelService) { }

  ngOnInit(): void {
    this.model=this.data.model;
    console.log(this.model);
  }

  updateModel(){
    this.modelService.updateModel(this.model).subscribe(data => {
      console.log(data);
    })
  }

  onSubmit(){
    // if(confirm('Are you sure you want to update this model ?'))
    console.log(this.model);
    this.updateModel();
    location.reload();
  }

}
