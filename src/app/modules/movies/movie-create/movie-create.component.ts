import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Notification } from "../../../providers/notification.provider";
import { Movie } from '../../../models/movies/movie.model'
import { MovieService } from '../../../services/movies/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.scss']
})
export class MovieCreateComponent implements OnInit {

  public movie = new Movie(null, null, null, null, null);
  @ViewChild('btnClose') btnClose : ElementRef;
  @Output() public created = new EventEmitter<boolean>();

  constructor(
    private movieService: MovieService,
    private notification: Notification
  ) { }

  ngOnInit() {
  }

  /**
   * Crea una película.
   */
  public createMovie(): void{
    this.movieService.create(this.movie)
    .subscribe(
      res => {
        console.log(res);
        this.notification.showNotification(
          'success',
          'top',
          'right',
          'Se registró la película con éxito.'
        );
        this.movie.reset();
        this.btnClose.nativeElement.click();
        this.created.next(true);
      },
      error =>  {
        console.log(error);
        this.notification.showNotification(
          'danger',
          'top',
          'right',
          'Ups! Ocurrió un error al registrar la película.'
        );
      }
    );
  }

}
