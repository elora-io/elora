import { Component } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { Http } from 'angular2/http';

@Component({
	selector: 'login',  // <login></login>
  template: require('./login.html')
})
export class Login {
	constructor(public router: Router, public http: Http) {
	}

	login(event, username, password) {
    event.preventDefault();
    let credentials = JSON.stringify({ username, password });
    //TODO: Authenticate
		var loginArgs = {
      data: {
	        "username": "*",
              "password": "*"
		  },
			headers: {
		        "Content-Type": "application/json"
      } 
		};
		this.http.post('https://jira.platform.dev.sdt.ericsson.se/jira/rest/auth/1/session', loginArgs)
		  .subscribe(
	        response => {
			  console.log('logged in: ' + response);
	          //TODO: Save session header & route to default page
	          //this.router.parent.navigateByUrl('/home');
	      },
	      error => {
	        console.log(error.text()); //TODO: Display errors on log in page
	      }
	    );
	}

}
