import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrotherYoungestComponent } from './brother-youngest.component';

describe('BrotherYoungestComponent', () => {
  let component: BrotherYoungestComponent;
  let fixture: ComponentFixture<BrotherYoungestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrotherYoungestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrotherYoungestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
