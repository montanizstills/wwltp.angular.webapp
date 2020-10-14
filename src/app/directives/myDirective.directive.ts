import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirective {

  constructor(el: ElementRef){}

  @HostBinding('class.is-category') isCategory = true;

  @HostBinding('class.is-category-hovering') hovering = false;

  @HostBinding('style.font-family') fontFamily;

  @HostListener('mouseenter') onMyMouseEnter() {
    this.hovering = true
  }

  @HostListener('mouseleave') onMyMouseLeave() {
    this.hovering = false;
  }

  @Input() set appMyDirective(value) {
    this.isCategory = value
  }

  @Input() set setFontFamily(value:String) {
    this.fontFamily = value
  }
}
