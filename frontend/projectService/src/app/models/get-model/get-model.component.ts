import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model } from 'src/app/model/model/model';
import { Project } from 'src/app/model/project/project';
import { Tab } from 'src/app/model/tab/tab';
import { ModelService } from 'src/app/service/model/model.service';
import { TabService } from 'src/app/service/tab/tab.service';

@Component({
  selector: 'app-get-model',
  templateUrl: './get-model.component.html',
  styleUrls: ['./get-model.component.css']
})
export class GetModelComponent implements OnInit {

  idProject !: number;
  id !: number;
  project : Project = new Project();
  model : Model = new Model();
  tabs !: Tab [];
  constructor(private modelService : ModelService, private tabService: TabService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getModelById();
    this.getTabsByIdModel();
  }

  private getModelById(){
    this.id = this.route.snapshot.params['id'];
    this.modelService.getModelById(this.id).subscribe( data =>{
      this.model=data;
      console.log(this.project);
    });
    
  }

  private getTabsByIdModel(){
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.tabService.getTabListByIdModel(this.id).subscribe(data =>{
      this.tabs = data;
    });
  }

}
