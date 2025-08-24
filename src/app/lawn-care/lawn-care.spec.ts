import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawnCare } from './lawn-care';

describe('LawnCare', () => {
  let component: LawnCare;
  let fixture: ComponentFixture<LawnCare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LawnCare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LawnCare);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
