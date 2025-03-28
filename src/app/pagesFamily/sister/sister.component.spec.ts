import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisterComponent } from './sister.component';

describe('SisterComponent', () => {
  let component: SisterComponent;
  let fixture: ComponentFixture<SisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
