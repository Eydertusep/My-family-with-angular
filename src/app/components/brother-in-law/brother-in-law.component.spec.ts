import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrotherInLawComponent } from './brother-in-law.component';

describe('BrotherInLawComponent', () => {
  let component: BrotherInLawComponent;
  let fixture: ComponentFixture<BrotherInLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrotherInLawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrotherInLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
