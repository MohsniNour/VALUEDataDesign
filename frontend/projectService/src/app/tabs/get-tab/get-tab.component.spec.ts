import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTabComponent } from './get-tab.component';

describe('GetTabComponent', () => {
  let component: GetTabComponent;
  let fixture: ComponentFixture<GetTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
