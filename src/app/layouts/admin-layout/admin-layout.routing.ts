import { Routes } from '@angular/router';

import { MovieIndexComponent } from '../../modules/movies/movie-index/movie-index.component';
import { MovieShowComponent } from '../../modules/movies/movie-show/movie-show.component';

export const AdminLayoutRoutes: Routes = [
  { 
    path: '',
    component: MovieIndexComponent
  },
  {
    path: 'movies/:id',
    component: MovieShowComponent
  }
];