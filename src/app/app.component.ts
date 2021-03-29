import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth/auth.service';
import { User } from '../core/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Simples Dental';
  isLogged = false;
  user: User = new User();

  constructor(private authService: AuthService) {
    const storage = localStorage.getItem('app_simples_dental');
    if (storage != null) {
      this.user = JSON.parse(storage);
    }
  }

  ngOnInit(): void {
    this.listenStorage();
    this.authService.isLogged().subscribe(bool => this.isLogged = bool);
    this.getUser();
  }

  getUser(): void {
    this.authService.getUser().subscribe(user => this.user = user);
  }

  listenStorage(): void {
    if (this.hasStorage()) {
      this.isLogged = true;
    } else {
      this.logout();
      this.isLogged = false;
    }
  }

  hasStorage = (): boolean => localStorage.getItem('app_simples_dental') !== null;

  logout = () => this.authService.logout();
}
