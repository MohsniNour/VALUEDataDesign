import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TagService } from 'src/app/service/tag/tag.service';

@Component({
  selector: 'app-delete-tag',
  templateUrl: './delete-tag.component.html',
  styleUrls: ['./delete-tag.component.css']
})
export class DeleteTagComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private tagService : TagService, private toastr: ToastrService) { }

  ngOnInit(): void {}

  deleteTag(){
    this.tagService.deleteTag(this.data.tag.idTag).subscribe(data => {
      console.log(data);
    })
  }

  onSubmit(){
    this.deleteTag();
    console.log(this.data)
    this.showNotification()
  }

  showNotification() {
    this.toastr.error('Tag deleted successfully');
    setTimeout(() => {
      window.location.reload(); // Reload the page after a delay
    }, 1000); // Delay in milliseconds (e.g., 2000 milliseconds = 2 seconds)
  }

}
