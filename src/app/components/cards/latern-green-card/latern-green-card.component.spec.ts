import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaternGreenCardComponent } from './latern-green-card.component';

describe('LaternGreenCardComponent', () => {
  let component: LaternGreenCardComponent;
  let fixture: ComponentFixture<LaternGreenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaternGreenCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaternGreenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
