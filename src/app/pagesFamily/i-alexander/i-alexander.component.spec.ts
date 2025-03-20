import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IAlexanderComponent } from './i-alexander.component';

describe('IAlexanderComponent', () => {
  let component: IAlexanderComponent;
  let fixture: ComponentFixture<IAlexanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IAlexanderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IAlexanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
