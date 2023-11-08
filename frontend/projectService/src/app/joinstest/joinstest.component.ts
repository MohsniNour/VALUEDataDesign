import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-joinstest',
  templateUrl: './joinstest.component.html',
  styleUrls: ['./joinstest.component.css']
})
export class JoinstestComponent implements OnInit {

  @ViewChild('table1', { static: true }) table1!: ElementRef;
  @ViewChild('table2', { static: true }) table2!: ElementRef;
  arrows: any[] = [];
  isDragging = false;
  dragStartX!: number;
  dragStartY!: number;

  ngOnInit() {
    this.arrows = [];
  }

  onDragStart(event: DragEvent, source: ElementRef) {
    event.dataTransfer?.setData('text', 'table1'); // Identify the source table
    this.isDragging = true;
    this.dragStartX = event.clientX;
    this.dragStartY = event.clientY;
  }

  onDragOver(event: Event) {
    event.preventDefault();
  }

  onDrop(event: DragEvent, target: ElementRef) {
    event.preventDefault();
    const sourceTable = event.dataTransfer?.getData('text');
    const sourceRect = this.table1.nativeElement.getBoundingClientRect();
    const targetRect = this.table2.nativeElement.getBoundingClientRect();
    const arrowPath = `M ${sourceRect.left + sourceRect.width / 2} ${sourceRect.top + sourceRect.height / 2} L ${targetRect.left + targetRect.width / 2} ${targetRect.top + targetRect.height / 2}`;
  
    if (sourceTable && sourceTable !== target.nativeElement) {
      this.arrows.push({ path: arrowPath });
    }
    this.isDragging = false;
  }

  onSvgClick(event: MouseEvent) {
    if (this.isDragging) {
      this.isDragging = false;
    }
  }
}
