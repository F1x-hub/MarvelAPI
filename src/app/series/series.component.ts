import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../services/marvel-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  seriesArr: any[] = [];
  itemsPerPage: number = 10; 
  public loading = false;
  currentPage: number = 1;
  constructor(public marvelService: MarvelApiService) {}
  ngOnInit(): void {
    this.loadSeries();
  }
  loadSeries() {
    this.loading = true;
    
    const cachedData = localStorage.getItem('allSeries');
    if (cachedData) {
      const cachedSeries = JSON.parse(cachedData);
      this.seriesArr = cachedSeries.data.results;
      this.currentPage = cachedSeries.data.offset + 1;
      this.loading = false;
    } else {
      this.marvelService.getSeries().subscribe((series: any) => {
        this.seriesArr = series.data.results;
        this.currentPage = series.data.offset + 1;
        this.loading = false;
        localStorage.setItem('allSeries', JSON.stringify(series));
      });
    }
  }

  
}
