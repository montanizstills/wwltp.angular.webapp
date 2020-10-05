import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirective {

  @HostBinding('class.is-category') isCategory = true;

}
