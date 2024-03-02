import { Component, OnInit, ViewChild} from '@angular/core';
import { MarvelApiService } from '../services/marvel-api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent{
  searchQuery: string = '';
  @ViewChild('searchForm') searchForm!: NgForm;

  constructor(private router: Router) {}

  searchAndNavigate(): void {
    this.router.navigate(['/search'], { queryParams: { query: this.searchQuery }});
  }
}
