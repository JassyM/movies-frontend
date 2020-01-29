import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { Notification } from "../../../providers/notification.provider";
import { Movie } from '../../../models/movies/movie.model'
import { MovieService } from '../../../services/movies/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

  @Input() public idMovie: string;
  @Output() public edited = new EventEmitter<boolean>();
  @ViewChild('btnClose') btnClose : ElementRef;
  public movie: Movie;
  public loading: boolean = false;
  genreList: string[] = ['Drama', 'Comedia', 'Acción', 'Romance', 'Horror',
  'Fantasía', 'Ciencia Ficción', 'Suspenso', 'Aventura', 'Animación', 'Documental'];

  constructor(
    private movieService: MovieService,
    private notification: Notification
  ) { }

  ngOnInit() {
    this.getMovie(this.idMovie);
  }

  /**
   * Obtiene una película dada.
   * @param id id de la película a consultar.
   */
  getMovie(id: string): void{
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

  /**
   * Función que actualiza una película.
   */
  public updateMovie(): void{
    this.loading = true;
    this.movieService.update(this.movie, this.movie.id)
    .subscribe(
      res => {
        console.log('Actualizado:' + res);
        this.notification.showNotification(
          'success',
          'top',
          'right',
          'Se actualizó la película correctamente.'
        );
        this.loading = false;
        this.btnClose.nativeElement.click();
        this.edited.next(true);
      },
      error =>  {
        this.loading = false;
        console.log('Error:' + error);
        this.notification.showNotification(
          'danger',
          'top',
          'right',
          'Ups! Ocurrió un error al actualizar la película'
        );
      }
    );
  }
}
