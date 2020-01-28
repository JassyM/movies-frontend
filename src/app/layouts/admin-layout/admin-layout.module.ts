import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Notification } from '../../providers/notification.provider';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { MovieIndexComponent } from '../../modules/movies/movie-index/movie-index.component';
import { MovieService } from '../../services/movies/movie.service';
import { MovieShowComponent } from '../../modules/movies/movie-show/movie-show.component';
import { MovieEditComponent } from '../../modules/movies/movie-edit/movie-edit.component';
import { MovieCreateComponent } from '../../modules/movies/movie-create/movie-create.component';

@NgModule({
  declarations: [
    MovieIndexComponent,
    MovieShowComponent,
    MovieEditComponent,
    MovieCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule
  ],
  providers: [
    Notification,
    MovieService
  ]
})
export class AdminLayoutModule { }
