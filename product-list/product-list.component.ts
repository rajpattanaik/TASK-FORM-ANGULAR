import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightExpensiveDirective } from '../highlight-expensive.directive';
import { CustomCurrencyPipe } from '../custom-currency.pipe';

interface Product {
  name: string;
  category: string;
  price: number;
}
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, HighlightExpensiveDirective, CustomCurrencyPipe],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
     @Input() products: Product[] = [];
   @Output() delete = new EventEmitter<number>();

  onDelete(index: number) {
      this.delete.emit(index);
  }
}
