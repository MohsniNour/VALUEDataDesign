import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAttributeDialogComponent } from './update-attribute-dialog.component';

describe('UpdateAttributeDialogComponent', () => {
  let component: UpdateAttributeDialogComponent;
  let fixture: ComponentFixture<UpdateAttributeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAttributeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAttributeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
