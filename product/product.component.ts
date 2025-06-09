import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';

interface Product {
  name: string;
  category: string;
  price: number;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ProductListComponent],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  productForm: FormGroup;
  products: Product[] = [];

  constructor(private fb: FormBuilder) {
     this.productForm = this.fb.group({
      name: ['', Validators.required],
            category: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
    });
  }

  addProduct() {
    if (this.productForm.valid) {
          this.products.push(this.productForm.value);
       this.productForm.reset();
    }
  }

  deleteProduct(index: number) {
         this.products.splice(index, 1);
  }
}
