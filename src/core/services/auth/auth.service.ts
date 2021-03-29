import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userSubject: Subject<User> = new Subject<User>();
  isLoggedSubject: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router) {
  }

  login(user: User): void {
    localStorage.setItem('app_simples_dental', JSON.stringify(user));
    this.userSubject.next(user);
    this.isLoggedSubject.next(true);
    this.router.navigate(['albums']);

  }

  logout(): void {
    localStorage.removeItem('app_simples_dental');
    this.router.navigate(['login']);
    console.log('saiu');
    this.isLoggedSubject.next(false);
  }

  getLoggedUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  isLogged(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }

}
