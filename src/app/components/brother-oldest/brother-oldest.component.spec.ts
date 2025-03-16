import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrotherOldestComponent } from './brother-oldest.component';

describe('BrotherOldestComponent', () => {
  let component: BrotherOldestComponent;
  let fixture: ComponentFixture<BrotherOldestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrotherOldestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrotherOldestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
