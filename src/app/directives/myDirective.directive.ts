import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirective {
 
  @HostBinding('class.is-category') isCategory = true;
 
  @HostBinding('class.is-category-hovering') hovering = false;
 
  @HostListener('mouseenter') onMyMouseEnter() {
    this.hovering = true
  }
 
  @HostListener('mouseleave') onMyMouseLeave() {
    this.hovering = false;
  }
 
  // breaks isCategory directive-binding
  // @Input() set appMyDirective(value) {
  //   this.isCategory = value
  // }

}
