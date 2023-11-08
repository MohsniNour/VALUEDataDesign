import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinstestComponent } from './joinstest.component';

describe('JoinstestComponent', () => {
  let component: JoinstestComponent;
  let fixture: ComponentFixture<JoinstestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinstestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
