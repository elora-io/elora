import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

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
    <nav class="cyan darken-4" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo">Elora</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="sass.html"><i class="material-icons">search</i></a></li>
        </ul>
      </div>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer class="page-footer cyan darken-4">
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
}
