import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Tag } from 'src/app/model/Tag/tag';
import { TagService } from 'src/app/service/tag/tag.service';

@Component({
  selector: 'app-update-tag',
  templateUrl: './update-tag.component.html',
  styleUrls: ['./update-tag.component.css']
})
export class UpdateTagComponent implements OnInit {

  tag : Tag= new Tag();
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private tagService : TagService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.tag=this.data.tag;
    console.log(this.tag);
  }

  updateTag(){
    this.tagService.updateTag(this.tag).subscribe(data => {
      console.log(data); 
    })
  }
  onSubmit(){
    console.log(this.tag);
    this.updateTag();
    this.showNotification()
  }

  showNotification() {
    this.toastr.success('Tag updated successfully');
    setTimeout(() => {
      window.location.reload(); // Reload the page after a delay
    }, 1000); // Delay in milliseconds (e.g., 2000 milliseconds = 2 seconds)
  }  
}
