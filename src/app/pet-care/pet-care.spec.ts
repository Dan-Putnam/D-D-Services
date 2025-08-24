import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCare } from './pet-care';

describe('PetCare', () => {
  let component: PetCare;
  let fixture: ComponentFixture<PetCare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetCare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetCare);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
