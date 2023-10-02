import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Tab } from 'src/app/model/tab/tab';
import { TabService } from 'src/app/service/tab/tab.service';

@Component({
  selector: 'app-update-tab-dialog',
  templateUrl: './update-tab-dialog.component.html',
  styleUrls: ['./update-tab-dialog.component.css']
})
export class UpdateTabDialogComponent implements OnInit {

  tab : Tab = new Tab();
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private tabService : TabService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.tab=this.data.tab;
  }
  
  updateTab(){
    this.tabService.updateTab(this.tab).subscribe(data => {
      console.log(data);
    })
  }
  onSubmit(){
    console.log(this.tab);
    this.updateTab();
    this.showNotification()
  }

  showNotification() {
    this.toastr.success('Table updated successfully');
    setTimeout(() => {
      window.location.reload(); // Reload the page after a delay
    }, 1000); // Delay in milliseconds (e.g., 2000 milliseconds = 2 seconds)
  }

}
