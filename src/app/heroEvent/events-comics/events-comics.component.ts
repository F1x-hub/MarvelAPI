import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-events-comics',
  templateUrl: './events-comics.component.html',
  styleUrls: ['./events-comics.component.css']
})
export class EventsComicsComponent implements OnInit {
  eventsArr : any[] = [];
  comicsArr : any[] = [];
  obj: any = {};
  itemsPerPage: number = 10; 
  public loading = false;
  currentPage: number = 1;
  constructor(private activeRoute: ActivatedRoute, public marvelService: MarvelApiService) {}

  ngOnInit(): void {
    this.loadEvents();
    this.loadComics();
  }
  loadEvents() {
    this.loading = true;
    this.obj = this.activeRoute.snapshot.params;
    
    const cachedEvents = localStorage.getItem(`events_${this.obj.id}`);
    if (cachedEvents) {
      const cachedEventData = JSON.parse(cachedEvents);
      this.eventsArr = cachedEventData.data.results;
      this.loading = false;
    } else {
      this.marvelService.getEventsById(this.obj.id).subscribe((events: any) => {
        this.eventsArr = events.data.results;
        this.loading = false;
        localStorage.setItem(`events_${this.obj.id}`, JSON.stringify(events));
      });
    }
  }

  loadComics() {
    this.loading = true;
    this.obj = this.activeRoute.snapshot.params;
    
    const cachedComics = localStorage.getItem(`comics_by_event_${this.obj.id}`);
    if (cachedComics) {
      const cachedComicsData = JSON.parse(cachedComics);
      this.comicsArr = cachedComicsData.data.results;
      this.currentPage = cachedComicsData.data.offset + 1;
      this.loading = false;
    } else {
      this.marvelService.getComicsByEventsId(this.obj.id).subscribe((comics: any) => {
        this.comicsArr = comics.data.results;
        this.currentPage = comics.data.offset + 1;
        this.loading = false;
        localStorage.setItem(`comics_by_event_${this.obj.id}`, JSON.stringify(comics));
      });
    }
  }

}
