import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/movies/movie.model'
import { MovieService } from '../../../services/movies/movie.service';

@Component({
  selector: 'app-movie-index',
  templateUrl: './movie-index.component.html',
  styleUrls: ['./movie-index.component.scss']
})
export class MovieIndexComponent implements OnInit {

  public genreList: string[] = ['Todo', 'Drama', 'Comedia', 'Acción', 'Romance', 'Horror',
  'Fantasía', 'Ciencia Ficción', 'Suspenso', 'Aventura', 'Animación', 'Documental'];
  public movies: Array<Movie>;
  public filteredMovies: Array<Movie>;
  public loading: boolean = true;
  test: any;
  public startIndex = 0;
  public endIndex = 10;
  public loadingFilter: boolean = true;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  /**
   * Obtiene el listado de todas las películas.
   */
  public getMovies(): void{
    this.loading = true;
    this.loadingFilter = true;
    this.movieService.getAll()
    .subscribe(
      res => {
        this.movies = res;
        this.filteredMovies = res;
        this.loading = false;
        this.loadingFilter = false;
        console.log(this.movies.length)
      },
      error => {
        this.loading = false;
        this.loadingFilter = false;
        console.log(error);
      });
  }

  /**
   * Función usada para realizar la paginación. De acuerdo al tamaño de la lista
   * de películas, se crea un array de indices.
   * @param  length Tamaño de una lista
   * @return        Array de indices
   */
  public getArrayFromNumbers(length): Array<any> {
    return new Array(Math.ceil(length/10));
  }

  /**
   * Actualiza los indices de la paginación.
   */
  public updateIndex(pageIndex: number): void {
    if (pageIndex > -1) {
      this.startIndex = pageIndex * 10;
      this.endIndex = this.startIndex + 10;
    }
  }

  /**
   * Hace un llamado a la función getMovies() para obtener el listado de películas.
   * @param created  true si se creó una película
   */
  public onCreated(created: boolean): void {
    if(created) {
      this.getMovies();
    }
  }

  public filterMovies(genre: string) {
    this.loadingFilter = true;
    this.filteredMovies = null;
    if(genre != 'Todo') {
      this.filteredMovies = this.movies.filter(movie => {
        if(movie.genre == genre)
          return movie;
      });
      this.loadingFilter = false;
    } else {
      this.filteredMovies = this.movies.slice();
      this.loadingFilter = false;
    }
    this.startIndex = 0;
    this.endIndex = 10;
  }

}
