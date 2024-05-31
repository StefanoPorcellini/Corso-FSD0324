import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRandomColor]'
})
export class RandomColorDirective {

  constructor(
    private eleRef: ElementRef
  ) {
    this.eleRef.nativeElement.style.backgroundColor =
    `rgb(
    ${Math.round(Math.random()*255)},
    ${Math.round(Math.random()*255)},
    ${Math.round(Math.random()*255)}
    )`
  }
}
