import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './list/albums.component';
import { AuthGuard } from '../../core/services/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent,
  },
  {
    path: 'show/:id',
    loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule), canActivate: [AuthGuard]
  },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AlbumsRoutingModule {
}
