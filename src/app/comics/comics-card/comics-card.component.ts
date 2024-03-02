import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-comics-card',
  templateUrl: './comics-card.component.html',
  styleUrls: ['./comics-card.component.css']
})
export class ComicsCardComponent implements OnInit {
  comicsArr: any[] = []; 
  characterArr: any[] = [];
  obj: any = {};
  currentPage: number = 1; 
  itemsPerPage: number = 10; 
  public loading = false;
  constructor(private activeRoute: ActivatedRoute, private marvelService: MarvelApiService){}

  ngOnInit(): void {
    
    this.loadComics();
    this.loadCharacters();
    
    
  }
  loadComics() {
    this.loading = true;
    this.obj = this.activeRoute.snapshot.params;
    
    const cachedComics = localStorage.getItem(`comics_${this.obj.id}`);
    if (cachedComics) {
      this.comicsArr = JSON.parse(cachedComics);
      this.loading = false;
    } else {
      this.marvelService.getComicsById(this.obj.id).subscribe((comics: any) => {
        this.comicsArr = comics.data.results;
        this.loading = false;
        localStorage.setItem(`comics_${this.obj.id}`, JSON.stringify(this.comicsArr));
      });
    }
  }

  loadCharacters() {
    this.loading = true;
    this.obj = this.activeRoute.snapshot.params;
    
    const cachedCharacters = localStorage.getItem(`characters_${this.obj.id}`);
    if (cachedCharacters) {
      this.characterArr = JSON.parse(cachedCharacters);
      this.loading = false;
    } else {
      this.marvelService.getCharacterByComicsId(this.obj.id).subscribe((characters: any) => {
        this.characterArr = characters.data.results;
        this.loading = false;
        localStorage.setItem(`characters_${this.obj.id}`, JSON.stringify(this.characterArr));
      });
    }
  }

  

}
