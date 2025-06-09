import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightExpensive]'
})
export class HighlightExpensiveDirective implements OnChanges {
  @Input('appHighlightExpensive') price!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.price > 1000) {
       this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }
  }
}
