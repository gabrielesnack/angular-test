import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenLanternCardComponent } from './green-lantern-card.component';

describe('GreenLanternCardComponent', () => {
  let component: GreenLanternCardComponent;
  let fixture: ComponentFixture<GreenLanternCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreenLanternCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenLanternCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
