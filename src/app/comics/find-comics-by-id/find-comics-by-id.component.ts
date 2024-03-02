import { ActivatedRoute } from '@angular/router';
import { MarvelApiService } from './../../services/marvel-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-comics-by-id',
  templateUrl: './find-comics-by-id.component.html',
  styleUrls: ['./find-comics-by-id.component.css']
})
export class FindComicsByIdComponent implements OnInit {

  charactersArr: any[] = []; 
  obj: any = {};
  itemsPerPage: number = 10; 
  public loading = false;
  currentPage: number = 1;
  constructor(private activeRoute: ActivatedRoute, private marvelService: MarvelApiService){}

  ngOnInit(): void {
    this.loadComics();
  }
  loadComics() {
    this.loading = true;
    this.obj = this.activeRoute.snapshot.params;

    const cachedData = localStorage.getItem(`comics_by_character_${this.obj.id}`);
    if (cachedData) {
      const cachedComics = JSON.parse(cachedData);
      this.charactersArr = cachedComics.data.results;
      this.currentPage = cachedComics.data.offset + 1;
      this.loading = false;
      console.log(this.charactersArr);
    } else {
      this.marvelService.getComicsByCharacter(this.obj.id).subscribe((comics: any) => {
        this.charactersArr = comics.data.results;
        this.currentPage = comics.data.offset + 1;
        this.loading = false;
        localStorage.setItem(`comics_by_character_${this.obj.id}`, JSON.stringify(comics));
      });
    }
  }
  }









