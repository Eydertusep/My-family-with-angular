import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NephewComponent } from './nephew.component';

describe('NephewComponent', () => {
  let component: NephewComponent;
  let fixture: ComponentFixture<NephewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NephewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NephewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
