import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-series-comics',
  templateUrl: './series-comics.component.html',
  styleUrls: ['./series-comics.component.css']
})
export class SeriesComicsComponent implements OnInit {
  seriesArr : any[] = [];
  comicsArr : any[] = [];
  obj: any = {};
  itemsPerPage: number = 10; 
  public loading = false;
  currentPage: number = 1;
constructor(private activeRoute: ActivatedRoute, public marvelService: MarvelApiService) {}
  
ngOnInit(): void {
    this.loadSeries();
    this.loadComics();
  }

  loadSeries() {
    this.loading = true;
    this.obj = this.activeRoute.snapshot.params;
    
    const cachedSeries = localStorage.getItem(`series_${this.obj.id}`);
    if (cachedSeries) {
      const cachedSeriesData = JSON.parse(cachedSeries);
      this.seriesArr = cachedSeriesData.data.results;
      this.loading = false;
    } else {
      this.marvelService.getSeriesById(this.obj.id).subscribe((series: any) => {
        this.seriesArr = series.data.results;
        this.loading = false;
        localStorage.setItem(`series_${this.obj.id}`, JSON.stringify(series));
      });
    }
  }

  loadComics() {
    this.loading = true;
    this.obj = this.activeRoute.snapshot.params;
    
    const cachedComics = localStorage.getItem(`comics_by_series_${this.obj.id}`);
    if (cachedComics) {
      const cachedComicsData = JSON.parse(cachedComics);
      this.comicsArr = cachedComicsData.data.results;
      this.currentPage = cachedComicsData.data.offset + 1;
      this.loading = false;
    } else {
      this.marvelService.getComicsBySeriesId(this.obj.id).subscribe((comics: any) => {
        this.comicsArr = comics.data.results;
        this.currentPage = comics.data.offset + 1;
        this.loading = false;
        localStorage.setItem(`comics_by_series_${this.obj.id}`, JSON.stringify(comics));
      });
    }
  }

}
