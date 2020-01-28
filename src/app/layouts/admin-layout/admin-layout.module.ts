import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { MovieIndexComponent } from '../../modules/movies/movie-index/movie-index.component';
import { MovieService } from '../../services/movies/movie.service';
import { MovieShowComponent } from '../../modules/movies/movie-show/movie-show.component';

@NgModule({
  declarations: [
    MovieIndexComponent,
    MovieShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
  ],
  providers: [
    MovieService
  ]
})
export class AdminLayoutModule { }
