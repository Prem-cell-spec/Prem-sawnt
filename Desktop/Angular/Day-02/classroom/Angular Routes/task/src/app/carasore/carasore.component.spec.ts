import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarasoreComponent } from './carasore.component';

describe('CarasoreComponent', () => {
  let component: CarasoreComponent;
  let fixture: ComponentFixture<CarasoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarasoreComponent]
    });
    fixture = TestBed.createComponent(CarasoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
