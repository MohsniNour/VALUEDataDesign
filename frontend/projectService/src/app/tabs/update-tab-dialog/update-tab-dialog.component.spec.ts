import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTabDialogComponent } from './update-tab-dialog.component';

describe('UpdateTabDialogComponent', () => {
  let component: UpdateTabDialogComponent;
  let fixture: ComponentFixture<UpdateTabDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTabDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTabDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
