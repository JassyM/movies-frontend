import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/movies/movie.model'
import { MovieService } from '../../../services/movies/movie.service';

@Component({
  selector: 'app-movie-index',
  templateUrl: './movie-index.component.html',
  styleUrls: ['./movie-index.component.scss']
})
export class MovieIndexComponent implements OnInit {

  genreList: string[] = ['Todo', 'Drama', 'Comedia', 'Acción', 'Romance', 'Horror', 
  'Fantasía', 'Ciencia Ficción', 'Suspenso', 'Aventura', 'Animación', 'Documental'];
  movies: Array<Movie>;
  loading: boolean = true;
  test: any;
  startIndex = 0;
  endIndex = 10;
  end: number = 0;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
    this.loading = true;
    this.movieService.getAll()
    .subscribe(
      res => {
        this.movies = res;
        this.loading = false;
        console.log(this.movies.length)
      },
      error => {
        this.loading = false;
        console.log(error);
      });
  }

  getArrayFromNumbers(length) {
    /* return new Array(length).map((a,i) => {
      return i
    }); */
    return new Array(Math.ceil(length/10));
  }

  updateIndex(pageIndex: number) {
    if (pageIndex > -1) {
      this.startIndex = pageIndex * 10;
      this.endIndex = this.startIndex + 10;
    }
    console.log("End: " + this.end);
    
  }

  public onCreated(created: boolean) {
    if(created) {
      this.getMovies();
    }
  }

}
