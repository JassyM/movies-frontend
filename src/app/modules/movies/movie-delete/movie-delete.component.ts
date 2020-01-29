import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Notification } from "../../../providers/notification.provider";
import { Router } from '@angular/router';
import { MovieService } from '../../../services/movies/movie.service';

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.scss']
})
export class MovieDeleteComponent implements OnInit {

  @Input() public idMovie: string;
  @ViewChild('btnClose') btnClose : ElementRef;

  constructor(
    private router: Router,
    private notification: Notification,
    private movieService: MovieService
  ) { }

  ngOnInit() {
  }

  /**
   * Elimina una película.
   */
  public deleteMovie(): void{
    this.movieService.delete(this.idMovie).subscribe(
      res => {
        console.log('Eliminada: ' + res);
        this.notification.showNotification(
          'info',
          'top',
          'right',
          `Se eliminó la película con éxito.`
        );
        this.btnClose.nativeElement.click();
        this.router.navigate(['/'])
      }, error => {
        console.log('error: ', error);
        this.notification.showNotification(
          'danger',
          'top',
          'right',
          `Ups! Ocurrió un error al eliminar la película.`
        );
      }
    );
  }
}
