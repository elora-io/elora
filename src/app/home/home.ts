import {Component} from 'angular2/core';

@Component({
  selector: 'home',  // <home></home>
  template: require('./home.html')
})
export class Home {
  constructor() {
  }

  ngOnInit() {
    console.log('hello `Home` component');
  }

}
