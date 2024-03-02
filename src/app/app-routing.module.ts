import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'characters',component:CharactersComponent},
  {path:'comics', component:ComicsComponent},
  {path:'comicsCharacter/:id', component:ComicsCardComponent},
  {path:'events', component:EventsComponent},
  {path:'series', component:SeriesComponent},
  {path:'search', component:SearchComponent},
  {path:'comicsById/:id', component:FindComicsByIdComponent},
  {path:'seriesById/:id', component:FindSeriesByIdComponent},
  {path:'seriesComics/:id', component:SeriesComicsComponent},
  {path:'eventsComics/:id', component:EventsComicsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
