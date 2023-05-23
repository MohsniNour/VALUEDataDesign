import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModelService } from 'src/app/service/model/model.service';

@Component({
  selector: 'app-delete-model-dialog',
  templateUrl: './delete-model-dialog.component.html',
  styleUrls: ['./delete-model-dialog.component.css']
})
export class DeleteModelDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private modelService : ModelService) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  deleteModel(){
    this.modelService.deleteModel(this.data).subscribe(data => {
      console.log(data);
    })
  }

  onSubmit(){
    this.deleteModel();
    console.log(this.data)
    location.reload();
  }

}
