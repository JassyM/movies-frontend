import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { MovieIndexComponent } from '../../modules/movies/movie-index/movie-index.component';

@NgModule({
  declarations: [
    MovieIndexComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
  ]
})
export class AdminLayoutModule { }
