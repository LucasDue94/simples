import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simples';
  private user = {
    username: 'Simples Dental',
    password: 'dental'
  };

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Large)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    /*localStorage.setItem('app_simples_dental', JSON.stringify(this.user));
    const appStorage = localStorage.getItem('app_simples_dental');*/
  }

}
