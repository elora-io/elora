import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {LoggedInRouterOutlet} from './login/LoggedInOutlet';
import {Home} from './home';
import {Login} from './login';
import {Profile} from './profile';
import {AppState} from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  directives: [ LoggedInRouterOutlet ],
  styles: [`
    body {
      flex: 1 0 auto;
    }
    main {
      width: 90%;
      margin: 0 auto;
      display: flex;
      min-height: 83vh;
      flex-direction: column;
    }
  `],
  template: `
    <nav class="cyan darken-4" role="navigation" *ngIf="isLoggedIn()">
      <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo">Elora</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="sass.html"><i class="material-icons">search</i></a></li>
        </ul>
      </div>
    </nav>
    <main>
      <logged-in-router-outlet></logged-in-router-outlet>
    </main>
    <footer class="page-footer cyan darken-4" *ngIf="isLoggedIn()">
      <div class="footer-copyright">
        <div class="container right-align">
          Copyright © 2016 Elora. All rights reserved
        </div>
      </div>
    </footer>
  `
})
@RouteConfig([
  { path: '/home', name: 'Home', component: Home, useAsDefault: true },
  { path: '/login', name: 'Login', component: Login }, //TODO: only display nav and footer when use is logged in
  { path: '/profile', name: 'Profile', component: Profile } //TODO: Configure profile to take in params
])
export class App {
  constructor(public appState: AppState) {}

  get state() {
    return this.appState.get();
  }

  ngOnInit() {
    console.log('Initial App State', this.state); //Debugging purpose
  }

  isLoggedIn() {
    return !!localStorage.getItem('credentials'); //TODO: Log out; This will delete the local storage item credentials 
  }
}
