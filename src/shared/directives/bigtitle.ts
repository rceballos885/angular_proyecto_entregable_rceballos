import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBigtitle]'
})
export class Bigtitle {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    // Set the font size to 2em
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '20px');
    // Set the font weight to bold
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    // Set the color to blue
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
  }
}
