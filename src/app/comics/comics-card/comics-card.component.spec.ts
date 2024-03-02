import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsCardComponent } from './comics-card.component';

describe('ComicsCardComponent', () => {
  let component: ComicsCardComponent;
  let fixture: ComponentFixture<ComicsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComicsCardComponent]
    });
    fixture = TestBed.createComponent(ComicsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
