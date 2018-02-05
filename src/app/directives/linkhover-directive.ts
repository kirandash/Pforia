import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[linkhover]'
})

export class LinkHoverDirective {
	constructor(private el: ElementRef) {
		this.el.nativeElement.style.color = "#40608f";
	}

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