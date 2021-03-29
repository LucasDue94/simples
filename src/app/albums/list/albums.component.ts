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

  constructor(private albumsService: AlbumsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAlbums();
    // this.albumsService.list().subscribe(albums => this.albums = albums.map((album: Album) => new Album(album)));
  }

  getAlbums() {
    this.albumsService.list().subscribe((albums: Album[]) => this.albums = albums);
  }

  openAlbum(album: Album): void {
    this.router.navigate(['albums/show/' + album.id]);
    // this.router.navigate(['photos/' + album.id]);
  }
}
