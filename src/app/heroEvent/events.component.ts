import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../services/marvel-api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventsArr: any[] = [];
  itemsPerPage: number = 10; 
  public loading = false;
  currentPage: number = 1;
  constructor(public marvelService: MarvelApiService) {}
  
  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    this.loading = true;
    const cachedData = localStorage.getItem('allEvents');
    if (cachedData) {
      const cachedEvents = JSON.parse(cachedData);
      this.eventsArr = cachedEvents.data.results;
      this.currentPage = cachedEvents.data.offset + 1;
      this.loading = false;
    } else {
      this.marvelService.allEvents().subscribe((events: any) => {
        this.eventsArr = events.data.results;
        this.currentPage = events.data.offset + 1;
        this.loading = false;
        localStorage.setItem('allEvents', JSON.stringify(events));
      });
    }

  }
}
