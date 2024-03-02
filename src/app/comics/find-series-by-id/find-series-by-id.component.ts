import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-find-series-by-id',
  templateUrl: './find-series-by-id.component.html',
  styleUrls: ['./find-series-by-id.component.css']
})
export class FindSeriesByIdComponent implements OnInit {
  seriesArr: any[] = []; 
  obj: any = {};
  itemsPerPage: number = 10; 
  public loading = false;
  currentPage: number = 1;
  constructor(private activeRoute: ActivatedRoute, private marvelService: MarvelApiService){}

  ngOnInit(): void {
    this.loadComics()
  }
  loadComics() {
    this.loading = true;
    this.obj = this.activeRoute.snapshot.params;

    const cachedData = localStorage.getItem(`series_by_character_${this.obj.id}`);
    if (cachedData) {
      const cachedSeries = JSON.parse(cachedData);
      this.seriesArr = cachedSeries.data.results;
      this.currentPage = cachedSeries.data.offset + 1;
      this.loading = false;
    } else {
      this.marvelService.getSeriesByCharacter(this.obj.id).subscribe((series: any) => {
        this.seriesArr = series.data.results;
        this.currentPage = series.data.offset + 1;
        this.loading = false;
        localStorage.setItem(`series_by_character_${this.obj.id}`, JSON.stringify(series));
      });
    }
  }
  
  }

  
  

