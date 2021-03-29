import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../../models/album';
import { Photo } from '../../models/photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private baseUrl = `${ environment.apiUrl }/albums`;

  constructor(private http: HttpClient) {
  }

  list(): Observable<Album[]> {
    return this.http.get<Album[]>(this.baseUrl);
  }

  getPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${ this.baseUrl }/${ albumId }/photos`);
  }
}
