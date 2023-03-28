import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() sideBarToggled = new EventEmitter<Boolean>();
  menuStatus: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  togglesidebar(){
    this.menuStatus= ! this.menuStatus;
    this.sideBarToggled.emit(this.menuStatus)
  }

}
