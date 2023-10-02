import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAttributeComponent } from './delete-attribute.component';

describe('DeleteAttributeComponent', () => {
  let component: DeleteAttributeComponent;
  let fixture: ComponentFixture<DeleteAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAttributeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
