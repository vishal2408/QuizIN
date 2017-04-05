import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDisable]'
})
export class DisableDirective {

  constructor(public el:ElementRef) {
    //this.el.nativeElement.disabled='true';
    this.el.nativeElement.focus='true';  }

}
