import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../services/marvel-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
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
