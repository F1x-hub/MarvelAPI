import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindComicsByIdComponent } from './find-comics-by-id.component';

describe('FindComicsByIdComponent', () => {
  let component: FindComicsByIdComponent;
  let fixture: ComponentFixture<FindComicsByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindComicsByIdComponent]
    });
    fixture = TestBed.createComponent(FindComicsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
