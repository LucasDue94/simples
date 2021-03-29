import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Simples Dental';
  private user = {
    username: 'simples',
    password: 'dental'
  };
  isLogged = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.HandsetPortrait)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private authService: AuthService,
              private router: Router) {
    // localStorage.removeItem('app_simples_dental');
    // localStorage.setItem('app_simples_dental', JSON.stringify(this.user));
    // console.log(JSON.parse(localStorage.getItem('app_simples_dental')));
  }

  ngOnInit(): void {
    this.listenStorage();
    this.authService.isLogged().subscribe(bool => this.isLogged = bool);
  }

  hasStorage = (): boolean => localStorage.getItem('app_simples_dental') !== null;

  listenStorage(): void {
    if (this.hasStorage()) {
      this.isLogged = true;
    } else {
      this.logout();
      this.isLogged = false;
    }
  }

  logout = () => this.authService.logout();
}
