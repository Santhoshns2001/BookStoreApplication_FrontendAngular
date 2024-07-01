import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCompletedpageComponent } from './order-completedpage.component';

describe('OrderCompletedpageComponent', () => {
  let component: OrderCompletedpageComponent;
  let fixture: ComponentFixture<OrderCompletedpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderCompletedpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderCompletedpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
