import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Attribute } from 'src/app/model/Attribute/attribute';
import { Tag } from 'src/app/model/Tag/tag';
import { AttributeService } from 'src/app/service/attribute/attribute.service';
import { TagService } from 'src/app/service/tag/tag.service';

@Component({
  selector: 'app-update-attribute-dialog',
  templateUrl: './update-attribute-dialog.component.html',
  styleUrls: ['./update-attribute-dialog.component.css']
})
export class UpdateAttributeDialogComponent implements OnInit {

  attribute : Attribute = new Attribute();
  tagList!:Tag[];
  selectedTagIds: number[]=[];
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private attributeService : AttributeService,private tagService: TagService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.attribute=this.data.attribute;
    this.getTagList()
  }

  private getTagList(){
    this.tagService.getTagList().subscribe(data =>{
      this.tagList = data;
      console.log(this.tagList)
    });
  }
  updateAttribute(){
    const selectedTags =  this.tagList.filter(tag=>this.selectedTagIds.includes(tag.idTag))
    console.log("tags selected", selectedTags)
    this.attribute.tags = selectedTags;
    this.attributeService.updateAttribute(this.attribute).subscribe(data => {
      console.log(data);
    })
  }
  
  // updateAttribute(){
  //   this.attributeService.updateAttribute(this.attribute).subscribe(data => {
  //     console.log(data);
  //   })
  // }
  onSubmit(){
    console.log(this.attribute);
    this.updateAttribute();
    this.showNotification()
  }

  showNotification() {
    this.toastr.success('Attribute updated successfully');
    setTimeout(() => {
      window.location.reload(); // Reload the page after a delay
    }, 1000); // Delay in milliseconds (e.g., 2000 milliseconds = 2 seconds)
  }

}
