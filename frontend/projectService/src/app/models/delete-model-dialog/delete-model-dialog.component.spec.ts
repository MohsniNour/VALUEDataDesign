import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModelDialogComponent } from './delete-model-dialog.component';

describe('DeleteModelDialogComponent', () => {
  let component: DeleteModelDialogComponent;
  let fixture: ComponentFixture<DeleteModelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteModelDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteModelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
