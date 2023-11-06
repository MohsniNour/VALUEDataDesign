import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AttributeService } from 'src/app/service/Attribute/attribute.service';

@Component({
  selector: 'app-delete-attribute',
  templateUrl: './delete-attribute.component.html',
  styleUrls: ['./delete-attribute.component.css']
})
export class DeleteAttributeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private attributeService : AttributeService,private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  deleteAttribute(){
    this.attributeService.deleteAttribute(this.data).subscribe(data => {
      console.log(data);
    })
  }

  onSubmit(){
    this.deleteAttribute();
    console.log(this.data)
    this.showNotification()
  }

  showNotification() {
    this.toastr.error('attribute deleted successfully');
    setTimeout(() => {
      window.location.reload(); // Reload the page after a delay
    }, 1000); // Delay in milliseconds (e.g., 2000 milliseconds = 2 seconds)
  }

}
