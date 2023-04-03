import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/model/model/model';

@Component({
  selector: 'app-get-project',
  templateUrl: './get-project.component.html',
  styleUrls: ['./get-project.component.css']
})
export class GetProjectComponent implements OnInit {

  models !: Model [];

  constructor() { }

  ngOnInit(): void {
  }

}
