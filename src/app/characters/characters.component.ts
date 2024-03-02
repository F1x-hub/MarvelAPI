import { MarvelApiService } from './../services/marvel-api.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  charactersArr: any[] = [];
  currentPage: number = 1; 
  itemsPerPage: number = 10; 
  public loading = false;
  ngxLoadingAnimationTypes: any;
  
  

  constructor(private MarvelService: MarvelApiService) {}
  
  ngOnInit(): void {
    const cachedCharacters = localStorage.getItem('cachedCharacters');
    if (cachedCharacters) {
      this.charactersArr = JSON.parse(cachedCharacters);
    } else {
      this.loadCharacters();
    }
    
  }

  loadCharacters(){
    this.loading = true;
    
    this.MarvelService.allCharacters().subscribe((comics: any) => {
      this.loading = false;
      this.charactersArr = comics.data.results;
      this.currentPage = comics.data.offset + 1;
      console.log(comics.data.results);
      localStorage.setItem('cachedCharacters', JSON.stringify(this.charactersArr));
    });
  }

  
}
