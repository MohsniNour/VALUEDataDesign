import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetModelComponent } from './get-model.component';

describe('GetModelComponent', () => {
  let component: GetModelComponent;
  let fixture: ComponentFixture<GetModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
