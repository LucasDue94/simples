import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './list/albums.component';
import { AlbumComponent } from './show/album.component';
import { AlbumsService } from '../../core/services/albums/albums.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PhotosComponent } from './photos/photos.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { PhotosModule } from './photos/photos.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AlbumsComponent, AlbumComponent, PhotosComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    AlbumsRoutingModule,
    PhotosModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [AlbumsService]
})
export class AlbumsModule {
}
