import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelApiService } from '../services/marvel-api.service';
import { NgForm } from '@angular/forms';
NgForm
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  characters: any[] = [];
  loading: boolean = false;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  nothingFound: boolean = false;
  name : any = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private marvelService: MarvelApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['query']) {
        this.searchCharacters(params['query']);
        this.name = params['query'];
        console.log(params['query']);
      }
    });
  }

  searchAndNavigate(): void {
    this.router.navigate(['/search'], { queryParams: { query: this.searchQuery }});
  }

  searchCharacters(query: string) {
    this.loading = true;
    this.marvelService.getCharacterByName(query).subscribe(
      (response: any) => {
        this.loading = false;
        this.characters = response.data.results;
        this.currentPage = response.data.offset / this.itemsPerPage + 1;
        this.nothingFound = this.characters.length === 0;
      },
      (error) => {
        this.loading = false;
        console.error('Error fetching characters:', error);
      }
    );
  }
}
