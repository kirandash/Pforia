import { Component, Input, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';
//http://deanmalone.net/post/using-jquery-from-angular2/

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, AfterViewInit {
  @Input() bannerImage: string;
  @ViewChild('scrollDown') el:ElementRef;
  
  constructor() { }
  
  ngOnInit() {
  }

  ngAfterViewInit() {
  	$(this.el.nativeElement).click(function(){
  		$('html, body').animate({
  			scrollTop: $('#primary').offset().top
  		}, 1000);
  		return false;
  	});
  }
}
