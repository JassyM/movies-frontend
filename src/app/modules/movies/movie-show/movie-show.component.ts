import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../../../models/movies/movie.model'
import { MovieService } from '../../../services/movies/movie.service';

@Component({
  selector: 'app-movie-show',
  templateUrl: './movie-show.component.html',
  styleUrls: ['./movie-show.component.scss']
})
export class MovieShowComponent implements OnInit {

  private id: string;
  public movie: Movie;
  public loading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    const idkey = 'id';
    this.activatedRoute.params.subscribe((data) => {
      this.id = data[idkey];
    });
    this.getMovie(this.id);
  }

  getMovie(id: string){
    this.loading = true;
    this.movieService.getById(id)
    .subscribe(
      res => {
        this.movie = res;
        this.loading = false;
        console.log(this.movie);
      },
      error =>  {
        this.loading = false;
        console.log(error);
      });
  }

}
