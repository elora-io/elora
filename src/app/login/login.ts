import { Component } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { Http, Headers } from 'angular2/http';

@Component({
	selector: 'login',  // <login></login>
	styles: [`
    .login-form {
      margin-top: 200px;
    }
	`],
  template: require('./login.html')
})
export class Login {
	constructor(public router: Router, public http: Http) {
	}

	login(event, username, password) {
    event.preventDefault();
		let authHeader = new Headers();
		let encodedUsernamePassword = btoa(username + ':' + password);

		authHeader.append('Authorization', 'Basic ' + encodedUsernamePassword);
		//TODO: Fix response to match what is returned on rest client, and save user on local storage (use this information to populate profile page)
		this.http.get('https://jira.platform.dev.sdt.ericsson.se/rest/api/2/user/search?username=' + username, { headers: authHeader })
			.subscribe(
	        response => {
						localStorage.setItem('credentials', encodedUsernamePassword);
						this.router.parent.navigateByUrl('/home');
	      },
	      error => {
	        console.log('error ' + error.text()); //TODO: Display errors on log in page
	      }
	    );
	}

}
