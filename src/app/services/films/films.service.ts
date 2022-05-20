import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Film } from "../../shared/models/film.model";
import {FilmDetail} from "../../shared/models/filmdetail.model";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private BASE_URL: string = 'https://api.themoviedb.org/3/';
  private API_KEY: string = "7265ffd2afcb59fe2dbd44af26d30768"

  constructor(private httpClient: HttpClient) { }

  public getFilms(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(this.BASE_URL + 'list/1?api_key=' + this.API_KEY);
  }

  public getPopularFilms(): Observable<any[]> {
    return this.httpClient.get<Film[]>(this.BASE_URL + 'movie/popular?api_key=' + this.API_KEY);
  }

  public getFilmDetail(id: number): Observable<FilmDetail> {
    return this.httpClient.get<FilmDetail>(this.BASE_URL + 'movie/' + id + '?api_key=' + this.API_KEY);
  }

}
