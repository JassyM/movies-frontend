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
  /*public strokeColor: any;
  public dashoffset: number;
  public loadingProgress: boolean = false;*/

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

    //this.calculateProgress();
  }

  /**
   * Función que obtiene una película dada.
   * @param id id de la película a consultar.
   */
  public getMovie(id: string): void{
    this.loading = true;
    this.movieService.getById(id)
    .subscribe(
      res => {
        this.movie = res;
        console.log(this.movie);
        /*setTimeout(()=>{
          this.calculateProgress(this.movie);
        }, 3000);*/
        this.loading = false;
      },
      error =>  {
        this.loading = false;
        console.log(error);
      });
  }

  /**
   * Función que hace un llamado a la función getMovie() para obtener una película.
   * @param edited true si se editó la película.
   */
  public onEdited(edited: boolean): void {
    if(edited){
      this.getMovie(this.id);
    }
  }
/*
  public calculateProgress(movie: Movie) {
    this.loadingProgress = true;
    let score = Number.parseFloat(movie.score);
    console.log("score: " + score);
    let ptj = (5*30.815).toFixed(2);
    this.dashoffset = Number.parseFloat(ptj);
    if(score > 6.0) {
      this.strokeColor = "rgb(108,185,124)";
    } else {
      this.strokeColor = "rgb(232, 98, 60)";
    }
    this.loadingProgress = false;
  }*/

}
