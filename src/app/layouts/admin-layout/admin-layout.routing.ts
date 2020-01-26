import { Routes } from '@angular/router';

import { MovieIndexComponent } from '../../modules/movies/movie-index/movie-index.component';

export const AdminLayoutRoutes: Routes = [
  { 
    path: '',
    component: MovieIndexComponent, 
    /* data: {
        breadcrumb: 'Movies'
    } */
  }
];