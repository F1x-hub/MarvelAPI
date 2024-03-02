import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ComicsComponent } from './comics/comics.component';
import { CharactersComponent } from './characters/characters.component';
import { EventsComponent } from './heroEvent/events.component';
import { SearchComponent } from './search/search.component';
import { ComicsCardComponent } from './comics/comics-card/comics-card.component';
import { FindComicsByIdComponent } from './comics/find-comics-by-id/find-comics-by-id.component';
import { FindSeriesByIdComponent } from './comics/find-series-by-id/find-series-by-id.component';
import { SeriesComponent } from './series/series.component';
import { SeriesComicsComponent } from './series/series-comics/series-comics.component';
import { EventsComicsComponent } from './heroEvent/events-comics/events-comics.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxLoadingModule} from 'ngx-loading';
import { CarouselComponent } from './carousel/carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';









@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ComicsComponent,
    CharactersComponent,
    EventsComponent,
    SearchComponent,
    ComicsCardComponent,
    FindComicsByIdComponent,
    FindSeriesByIdComponent,
    SeriesComponent,
    SeriesComicsComponent,
    EventsComicsComponent,
    CarouselComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgxLoadingModule.forRoot({}),
    SlickCarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
