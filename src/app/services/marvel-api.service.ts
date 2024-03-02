import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  constructor(private http:HttpClient) { }

  BaseCharacterUrl = 'https://gateway.marvel.com/v1/public/characters?&limit=100&ts=1&apikey=ef18358be8b883aae1e149c036e47769&hash=b096b47bb2a0752dc1b59d73751b4b4c';
  BaseComicsrUrl = 'https://gateway.marvel.com/v1/public/comics?&limit=100&ts=1&apikey=ef18358be8b883aae1e149c036e47769&hash=b096b47bb2a0752dc1b59d73751b4b4c';
  BaseEventsUrl = 'https://gateway.marvel.com/v1/public/events?&limit=100&ts=1&apikey=ef18358be8b883aae1e149c036e47769&hash=b096b47bb2a0752dc1b59d73751b4b4c';

  allCharacters(): Observable<any> {
    
    return this.http.get(this.BaseCharacterUrl);
  }
  getCharacterByName(characterName:string):Observable<any>
  {
    const characterBYNameUrl = `https://gateway.marvel.com:443/v1/public/characters?&limit=100&ts=1&name=${characterName}&apikey=ef18358be8b883aae1e149c036e47769&hash=b096b47bb2a0752dc1b59d73751b4b4c`;
    return this.http.get(characterBYNameUrl);
  }
  getComicsById(comicsId:string):Observable<any>
  {
    const comicByCharacterUrl = `https://gateway.marvel.com:443/v1/public/comics/${comicsId}?&limit=100&ts=1&apikey=ef18358be8b883aae1e149c036e47769&hash=b096b47bb2a0752dc1b59d73751b4b4c`;
    return this.http.get(comicByCharacterUrl);
  }
  getCharacterByComicsId(comicsId:string):Observable<any>
  {
    const carachterByComicsUrl = `https://gateway.marvel.com:443/v1/public/comics/${comicsId}/characters?&limit=100&ts=1&apikey=ef18358be8b883aae1e149c036e47769&hash=b096b47bb2a0752dc1b59d73751b4b4c`;
    return this.http.get(carachterByComicsUrl);
  }
  getComicsByCharacter(characterId:string):Observable<any>
  {
    const comicByCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?&limit=100&ts=1&apikey=ef18358be8b883aae1e149c036e47769&hash=b096b47bb2a0752dc1b59d73751b4b4c`;
    return this.http.get(comicByCharacterUrl);
  }
  getSeries():Observable<any>{
    const seriesUrl = `https://gateway.marvel.com:443/v1/public/series?&limit=100&ts=1&apikey=ef18358be8b883aae1e149c036e47769&hash=b096b47bb2a0752dc1b59d73751b4b4c`;
    return this.http.get(seriesUrl);
  }
  getComicsBySeriesId(seriesId:string):Observable<any>{
    const seriesUrl = `https://gateway.marvel.com:443/v1/public/series/${seriesId}/comics?&limit=100&ts=1&apikey=ef18358be8b883aae1e149c036e47769&hash=b096b47bb2a0752dc1b59d73751b4b4c`;
    return this.http.get(seriesUrl);
  }
  getComicsByEventsId(eventsId:string):Observable<any>{
    const eventsUrl = `https://gateway.marvel.com:443/v1/public/events/${eventsId}/comics?&limit=100&ts=1&apikey=ef18358be8b883aae1e149c036e47769&hash=b096b47bb2a0752dc1b59d73751b4b4c`;
    return this.http.get(eventsUrl);
  }
  getSeriesByCharacter(characterId:string):Observable<any>
  {
    const comicByCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/series?&limit=100&ts=1&apikey=ef18358be8b883aae1e149c036e47769&hash=b096b47bb2a0752dc1b59d73751b4b4c`;
    return this.http.get(comicByCharacterUrl);
  }
  getSeriesById(seriesId:string):Observable<any>{
    const seriesUrl = `https://gateway.marvel.com:443/v1/public/series/${seriesId}?&limit=100&ts=1&apikey=ef18358be8b883aae1e149c036e47769&hash=b096b47bb2a0752dc1b59d73751b4b4c`;
    return this.http.get(seriesUrl);
  }
  getEventsById(eventsId:string):Observable<any>{
    const eventsUrl = `https://gateway.marvel.com:443/v1/public/events/${eventsId}?&limit=100&ts=1&apikey=ef18358be8b883aae1e149c036e47769&hash=b096b47bb2a0752dc1b59d73751b4b4c`;
    return this.http.get(eventsUrl);
  }
  allComics():Observable<any>
  {
    const comicUrl ='https://gateway.marvel.com:443/v1/public/comics?&limit=100&ts=1&apikey=ef18358be8b883aae1e149c036e47769&hash=b096b47bb2a0752dc1b59d73751b4b4c';
    
    return this.http.get(comicUrl);
  }


  allEvents():Observable<any>
  {
    const EventUrl = 'https://gateway.marvel.com:443/v1/public/events?&limit=100&ts=1&apikey=ef18358be8b883aae1e149c036e47769&hash=b096b47bb2a0752dc1b59d73751b4b4c';
    return this.http.get(EventUrl);
  }
}
