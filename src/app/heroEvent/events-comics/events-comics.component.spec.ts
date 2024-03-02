import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsComicsComponent } from './events-comics.component';

describe('EventsComicsComponent', () => {
  let component: EventsComicsComponent;
  let fixture: ComponentFixture<EventsComicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsComicsComponent]
    });
    fixture = TestBed.createComponent(EventsComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
