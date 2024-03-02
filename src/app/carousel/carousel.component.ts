import { Component, HostListener, OnInit } from '@angular/core';
import { MarvelApiService } from '../services/marvel-api.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  
})
export class CarouselComponent implements OnInit {
  charactersArr: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  loading = false;
  ngxLoadingAnimationTypes: any;
  currentSlideIndex: number = 0;
  autoSlideInterval: Subscription | undefined;
  prevIndex: number = 0;
  nextIndex: number = 0;
  constructor(private marvelService: MarvelApiService) {}

  ngOnInit(): void {
    document.addEventListener('keydown', function(event) {
      console.log(event.code);
    });
    const cachedCharacters = localStorage.getItem('cachedCharacters');
    if (cachedCharacters) {
      this.charactersArr = JSON.parse(cachedCharacters);
      this.startAutoSlide();
      this.prevIndex = this.calculatePrevIndex();
      this.nextIndex = this.calculateNextIndex();
    } else {
      this.loadCharacters();
      this.startAutoSlide();
      this.prevIndex = this.calculatePrevIndex();
      this.nextIndex = this.calculateNextIndex();
    }
  }

  loadCharacters() {
    this.loading = true;
    this.marvelService.allCharacters().subscribe((comics: any) => {
      this.loading = false;
      this.charactersArr = comics.data.results;
      console.log(this.charactersArr);
      localStorage.setItem('cachedCharacters', JSON.stringify(this.charactersArr));
    });
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft' || event.code === 'KeyA') {
      this.prevSlide();
    } else if (event.key === 'ArrowRight' || event.code === 'KeyD') {
      this.nextSlide();
    }
  }
  
  nextSlide() {
    if (this.currentSlideIndex < this.charactersArr.length - 1) {
      this.currentSlideIndex++;
    } else {
      this.currentSlideIndex = 0;
    }
    this.prevIndex = this.calculatePrevIndex();
    this.nextIndex = this.calculateNextIndex();
  }

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    } else {
      this.currentSlideIndex = this.charactersArr.length - 1;
    }
    this.prevIndex = this.calculatePrevIndex();
    this.nextIndex = this.calculateNextIndex();
  }
  startAutoSlide() {
    this.autoSlideInterval = interval(5000).subscribe(() => {
      this.nextSlide();
    });
  }
  calculatePrevIndex(): number {
    return this.currentSlideIndex === 0 ? this.charactersArr.length - 1 : this.currentSlideIndex - 1;
  }

  calculateNextIndex(): number {
    return this.currentSlideIndex === this.charactersArr.length - 1 ? 0 : this.currentSlideIndex + 1;
  }
}
