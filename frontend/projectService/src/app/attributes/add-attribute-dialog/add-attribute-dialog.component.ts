import { Component, Inject, OnInit } from '@angular/core';
import { MAT_CHECKBOX_DEFAULT_OPTIONS, MatCheckboxDefaultOptions } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Attribute } from 'src/app/model/Attribute/attribute';
import { Tag } from 'src/app/model/Tag/tag';
import { AttributeService } from 'src/app/service/attribute/attribute.service';
import { TagService } from 'src/app/service/tag/tag.service';

@Component({
  selector: 'app-add-attribute-dialog',
  templateUrl: './add-attribute-dialog.component.html',
  styleUrls: ['./add-attribute-dialog.component.css']
})
export class AddAttributeDialogComponent implements OnInit {

  attribute : Attribute = new Attribute();
  id!:number;
  attributeList!: Attribute[];
  tagList!:Tag[];
  selectedTagIds: number[]=[];
  constructor(private attributeService : AttributeService,private tagService: TagService, private toastr: ToastrService,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    console.log(this.data)
    this.getTagList()
  }
  private getTagList(){
    this.tagService.getTagList().subscribe(data =>{
      this.tagList = data;
      console.log(this.tagList)
    });
  }

  handleCheckboxEvent(){
    if(this.attribute.PKey==null)
    {this.attribute.PKey=false}
    if(this.attribute.requiredAttribute==null)
    {this.attribute.requiredAttribute=false}
    if(this.attribute.FKey==null)
    {this.attribute.FKey=false}
  }

  saveAttribute(){
    this.handleCheckboxEvent()
    console.log("att"+this.attribute);
    const selectedTags =  this.tagList.filter(tag=>this.selectedTagIds.includes(tag.idTag))
    console.log("tags selected", selectedTags)
    this.attribute.tags = selectedTags;
    console.log("attribute",this.attribute)
    this.attributeService.addAttribute(this.attribute,this.data.id).subscribe(data => {
      console.log(data);
    })
  }

  onSubmit(){
    console.log("att"+this.attribute);
    this.saveAttribute();
    console.log("tag"+this.attribute.tags);
    this.showNotification()
  }

  showNotification() {
    this.toastr.success('new attribute added successfully');
    setTimeout(() => {
      window.location.reload(); // Reload the page after a delay
    }, 1000); // Delay in milliseconds (e.g., 2000 milliseconds = 2 seconds)
  }


}
