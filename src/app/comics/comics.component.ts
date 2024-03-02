import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../services/marvel-api.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  comicsArr: any[] = [];
  itemsPerPage: number = 10; 
  totalPages: number = 0;
  currentPage: number = 1;
  public loading = false;
  constructor(public marvelService: MarvelApiService) {}

  ngOnInit(): void {
    this.loadComics();
  }
  loadComics() {
    this.loading = true;
    const cachedData = localStorage.getItem('allComics');
    if (cachedData) {
      const cachedComics = JSON.parse(cachedData);
      this.comicsArr = cachedComics.data.results;
      this.currentPage = cachedComics.data.offset + 1;
      this.loading = false;
    } else {
      this.marvelService.allComics().subscribe((comics: any) => {
        this.comicsArr = comics.data.results;
        this.currentPage = comics.data.offset + 1;
        this.loading = false;
        localStorage.setItem('allComics', JSON.stringify(comics));
      });
    }
  }

  

  
  
}
