import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-slider',
  templateUrl: './brand-slider.component.html',
  styleUrls: ['./brand-slider.component.css']
})
export class BrandSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
	// Marquee crawler slider
	marqueeInit({
	    uniqueid: 'mycrawler',
	    style: {
	    'padding-bottom': '160px',
	    'width' : '100%',
	    'margin':'0 auto',
	    'cursor': 'pointer' ,
	    },
	    
	    inc: 6, //speed - pixel increment for each iteration of this marquee's movement
	    mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
	    moveatleast: 2,
	    neutral: 100,
	    savedirection: true,
	    random: true
	});
  }

}
