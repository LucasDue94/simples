import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Album } from '../../../core/models/album';
import { AlbumsService } from '../../../core/services/albums/albums.service';
import { Photo } from '../../../core/models/photo';

@Component({
  selector: 'Album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnChanges {
  @Input() album: Album;
  photos: Photo[] = [];

  constructor(private albumService: AlbumsService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.albumService.getPhotos(this.album.id).subscribe(photos => this.photos = photos);
  }

  getUrl(): string {
    return this.photos[0] ? this.photos[0].thumbnailUrl : '';
  }
}
