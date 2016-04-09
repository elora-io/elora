import {Component} from 'angular2/core';

@Component({
  selector: 'profile',  // <profile></profile>
	styles: [`
    .profile-content {
			display: flex;
    }
    .profile-display-name {
    	margin-top: 0px;
    }
    .profile-basic-info {
    	margin-left: 10px;
    }
  `],
  template: require('./profile.html')
})
export class Profile {
  constructor() {
  }
}
