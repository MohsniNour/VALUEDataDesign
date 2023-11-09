import { Component, Inject, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Join } from 'src/app/model/join/join';
import { Tab } from 'src/app/model/tab/tab';
import { JoinService } from 'src/app/service/join/join.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-get-joins',
  templateUrl: './get-joins.component.html',
  styleUrls: ['./get-joins.component.css']
})
export class GetJoinsComponent implements OnInit {

  @ViewChild('content',{static:false}) el!: ElementRef;
  joins !: Join [];
  tab : Tab = new Tab();
  compare!: any;
  displayedColumns = ['tabName', 'joinTabName','value'];
  dataSource!: MatTableDataSource<Join>;

  constructor(private joinService : JoinService,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.tab=this.data.tab;
    this.getJoinsByIdTab();
  }

  exportAttributePDF(){
    let doc = new jsPDF("p","px");
    doc.html(this.el.nativeElement,{
      callback:(pdf) =>{
        pdf.save("listJoins"+this.tab.name+".pdf");
      }
    })
  }


  private getJoinsByIdTab(){
    this.joinService.getJoinListByIdTab(this.tab.idTable).subscribe(data =>{
      this.joins = data;
      this.dataSource = new MatTableDataSource(this.joins);
      console.log(this.dataSource)
      console.log(this.joins)
      }); 
  }

}
