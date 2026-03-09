import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auditorprofile } from './auditorprofile';

describe('Auditorprofile', () => {
  let component: Auditorprofile;
  let fixture: ComponentFixture<Auditorprofile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Auditorprofile],
    }).compileComponents();

    fixture = TestBed.createComponent(Auditorprofile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
