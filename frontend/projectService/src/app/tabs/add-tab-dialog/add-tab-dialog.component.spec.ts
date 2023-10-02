import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTabDialogComponent } from './add-tab-dialog.component';

describe('AddTabDialogComponent', () => {
  let component: AddTabDialogComponent;
  let fixture: ComponentFixture<AddTabDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTabDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTabDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
