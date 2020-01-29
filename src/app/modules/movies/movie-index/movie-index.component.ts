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
  endIndex = 12;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  /**
   * Obtiene el listado de todas las películas.
   */
  public getMovies(): void{
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
      this.startIndex = pageIndex * 12;
      this.endIndex = this.startIndex + 12;
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

}
