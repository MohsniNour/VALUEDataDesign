import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProjectsComponent } from './get-projects.component';

describe('GetProjectsComponent', () => {
  let component: GetProjectsComponent;
  let fixture: ComponentFixture<GetProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
