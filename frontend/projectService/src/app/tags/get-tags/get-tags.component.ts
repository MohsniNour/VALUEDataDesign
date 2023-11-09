import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tag } from 'src/app/model/Tag/tag';
import { TagService } from 'src/app/service/tag/tag.service';
import { AddTagComponent } from '../add-tag/add-tag.component';
import { UpdateTagComponent } from '../update-tag/update-tag.component';
import { DeleteTagComponent } from '../delete-tag/delete-tag.component';

@Component({
  selector: 'app-get-tags',
  templateUrl: './get-tags.component.html',
  styleUrls: ['./get-tags.component.css']
})
export class GetTagsComponent implements OnInit {

  search !:any;
  tags !: Tag [];

  constructor(private tagService : TagService, private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.getTags();
  }

  private getTags(){
    this.tagService.getTagList().subscribe(data =>{
      if (this.search) {
        this.tags = data.filter(obj => obj.name.includes(this.search));
      } else {
        this.tags = data;
      }
      console.log(this.tags)
    });
  }

  openAddTagDialog(){
    this.matDialog.open(AddTagComponent,{
      width:'620px', 
      height:'250px',
      panelClass: ['animate__animated'],
    });
  }

  openUpdateTagDialog(tag:any){
    this.matDialog.open(UpdateTagComponent,{
      width:'620px', 
      height:'250px',
      panelClass: ['animate__animated'],
      data:{
        tag:tag,
      }
    })
  }

  openDeleteTagDialog(tag:any){
    this.matDialog.open(DeleteTagComponent,{
      width:'620px', 
      height:'170px',
      panelClass: ['animate__animated'],
      data:{
        tag:tag,
      }
    })
  }

}
