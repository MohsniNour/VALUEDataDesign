import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJoinComponent } from './add-join.component';

describe('AddJoinComponent', () => {
  let component: AddJoinComponent;
  let fixture: ComponentFixture<AddJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
