import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSeriesByIdComponent } from './find-series-by-id.component';

describe('FindSeriesByIdComponent', () => {
  let component: FindSeriesByIdComponent;
  let fixture: ComponentFixture<FindSeriesByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindSeriesByIdComponent]
    });
    fixture = TestBed.createComponent(FindSeriesByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
