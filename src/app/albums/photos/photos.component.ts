import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../../../core/services/albums/albums.service';
import { Photo } from '../../../core/models/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  albumId = 0;
  photos: Photo[] = [];
  loading = true;

  constructor(private route: ActivatedRoute,
              private albumService: AlbumsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.albumId = this.route.snapshot.params.id;
    this.getPhotos();
  }

  getPhotos(): void {
    this.albumService.getPhotos(this.albumId).subscribe(photos => {
      this.photos = photos;
      setTimeout(() => this.loading = false, 1000);
    });
  }

  goBack(): void {
    this.router.navigate(['albums']);
  }
}
