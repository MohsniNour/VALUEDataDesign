import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetJoinsComponent } from './get-joins.component';

describe('GetJoinsComponent', () => {
  let component: GetJoinsComponent;
  let fixture: ComponentFixture<GetJoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetJoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetJoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
