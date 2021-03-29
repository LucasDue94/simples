import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../../core/services/albums/albums.service';
import { Album } from '../../../core/models/album';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [];
  loading = true;

  constructor(private albumsService: AlbumsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.albumsService.list().subscribe((albums: Album[]) => {
      this.albums = albums;
      setTimeout(() => this.loading = false, 1000);
    });
  }

  openAlbum(album: Album): void {
    this.router.navigate(['albums/show/' + album.id]);
  }
}
