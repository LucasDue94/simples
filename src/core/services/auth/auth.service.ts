import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedSubject: Subject<boolean> = new Subject<boolean>();
  userSubject: Subject<User> = new Subject<User>();

  constructor(private router: Router) {
  }

  login(user: User): void {
    localStorage.setItem('app_simples_dental', JSON.stringify(user));
    this.isLoggedSubject.next(true);
    this.userSubject.next(user);
    this.router.navigate(['albums']);
  }

  getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  logout(): void {
    localStorage.removeItem('app_simples_dental');
    this.router.navigate(['login']);
    this.isLoggedSubject.next(false);
  }

  isLogged(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }

}
