import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
	$(window).scroll(function(){
		var top = $(document).scrollTop();
		var batas = $('.main-menu-wrap').height();
		
		if(top > batas) {
			$('.unfixed-menu').addClass('show-fixed-menu');
		} else {
			$('.unfixed-menu').removeClass('show-fixed-menu');	
		}

		//Mobile Fixed Menu
		if(top > 0) {
			$('.site-branding.mobile, #page .main-menu-wrap.mobile-menu').addClass('fix-me');
		}else {
			$('.site-branding.mobile, #page .main-menu-wrap.mobile-menu').removeClass('fix-me');
		}
	});  	
  }

}
