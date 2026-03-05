import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensiveComponent } from './expensive-component';

describe('ExpensiveComponent', () => {
  let component: ExpensiveComponent;
  let fixture: ComponentFixture<ExpensiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensiveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensiveComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
