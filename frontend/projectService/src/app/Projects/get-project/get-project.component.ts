import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model } from 'src/app/model/model/model';
import { ModelService } from 'src/app/service/model/model.service';

@Component({
  selector: 'app-get-project',
  templateUrl: './get-project.component.html',
  styleUrls: ['./get-project.component.css']
})
export class GetProjectComponent implements OnInit {
  
  id !: number;
  models !: Model [];

  constructor(private modelService : ModelService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getModelsByIdProject();
  }

  private getModelsByIdProject(){
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.modelService.getModelListByIdProject(this.id).subscribe(data =>{
      this.models = data;
    });
  }

  

}
