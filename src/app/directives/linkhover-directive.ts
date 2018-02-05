import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
	selector: '[linkhover]'
})

export class LinkHoverDirective implements OnInit {
	constructor(private el: ElementRef) {
		this.el.nativeElement.style.color = "#40608f";
	}

	ngOnInit() {
		this.hover(this.defaultColor);
	}

	@Input() defaultColor: string; // Get the defaultColor from the directive in html

	@HostListener ('mouseenter') onMouseEnter(){
		this.hover('#747474');
	}

	@HostListener ( 'mouseleave' ) onMouseLeave(){
		this.hover('#40608f');
	}

	private hover(color){
		this.el.nativeElement.style.color = color;
	}
}