import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  image: string;

  constructor(private _router: Router){
  	this.image = 'assets/images/front-banner.jpg';
  	// console.log(_router.url);
  	_router.events.subscribe((e) => {
  		if(e instanceof NavigationEnd) {
  			switch (e.url) {
  				case "/home":
  					// code...
  					this.image = 'assets/images/front-banner.jpg';
  					break;
  				case "/gamme":
  					this.image = 'assets/images/gamme-banner.jpg';
  					break;
  				case "/service":
  					this.image = 'assets/images/service-banner.jpg';
  					break;
  				case "/contact":
  					this.image = 'assets/images/contact-banner.jpg';
  					break;
  				default:
  					// code...
  					this.image = 'assets/images/front-banner.jpg';
  					break;
  			}
  		}
  	});
  }


}
