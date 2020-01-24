import { Injectable } from '@angular/core';
import { EnvConfig } from "../../config/env.config";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from "rxjs";
import { Movie } from '../../models/movies/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly baseUrl:string;
  private headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = EnvConfig.baseUrl + 'movies/';
  }


  public create(movie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(this.baseUrl, movie, { headers: this.headers});
  }

  public update(movie: Movie, id: string): Observable<Movie> {
    return this.httpClient.put<Movie>(this.baseUrl + id, movie, { headers: this.headers});
  }

  public getById(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>(this.baseUrl + id, { headers: this.headers});
  }

  public getAll(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.baseUrl, { headers: this.headers});
  }

  public delete(id: string): Observable<{}> {
    return this.httpClient.delete(this.baseUrl + id, { headers: this.headers})
  }
}
