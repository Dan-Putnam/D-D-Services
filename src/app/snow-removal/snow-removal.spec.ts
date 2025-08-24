import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowRemoval } from './snow-removal';

describe('SnowRemoval', () => {
  let component: SnowRemoval;
  let fixture: ComponentFixture<SnowRemoval>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnowRemoval]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnowRemoval);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
