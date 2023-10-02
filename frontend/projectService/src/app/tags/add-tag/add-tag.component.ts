import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Tag } from 'src/app/model/Tag/tag';
import { TagService } from 'src/app/service/tag/tag.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css']
})
export class AddTagComponent implements OnInit {

  tag : Tag = new Tag();
  tagList!: Tag[];

  constructor(private tagService : TagService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.tagService.getTagList().subscribe(data =>{
      this.tagList = data;
      console.log(this.tagList)
    });
  }

  saveTag(){
        this.tagService.addTag(this.tag).subscribe(data => {
          console.log(data);
        })
      }

  onSubmit() {
    // const isTagNameExist = this.tagList.some(obj => obj.name === this.tag.name);
    // if (isTagNameExist) {
    //   this.showNotificationError();
    // } else {
    //   this.saveTag();
    //   this.showNotification();
    // }
    this.saveTag();
    this.showNotification();
  }

  showNotification() {
    this.toastr.success('New tag added successfully');
    setTimeout(() => {
      window.location.reload(); // Reload the page after a delay
    }, 1000); // Delay in milliseconds (e.g., 2000 milliseconds = 2 seconds)
  }

  showNotificationError() {
    this.toastr.error('tag name existe');
  }

}
