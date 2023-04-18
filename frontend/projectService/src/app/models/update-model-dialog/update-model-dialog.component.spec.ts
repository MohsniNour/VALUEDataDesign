import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateModelDialogComponent } from './update-model-dialog.component';

describe('UpdateModelDialogComponent', () => {
  let component: UpdateModelDialogComponent;
  let fixture: ComponentFixture<UpdateModelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateModelDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateModelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
