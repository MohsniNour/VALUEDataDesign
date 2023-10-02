import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTabComponent } from './delete-tab.component';

describe('DeleteTabComponent', () => {
  let component: DeleteTabComponent;
  let fixture: ComponentFixture<DeleteTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
