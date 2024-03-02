import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesComicsComponent } from './series-comics.component';

describe('SeriesComicsComponent', () => {
  let component: SeriesComicsComponent;
  let fixture: ComponentFixture<SeriesComicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesComicsComponent]
    });
    fixture = TestBed.createComponent(SeriesComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
