// src/app/components/product-search/product-search.component.ts
import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css'],
})
export class ProductSearchComponent {
  searchKeyword: string = '';
  searchResults: Product[] = [];

  constructor(private productService: ProductService) {}

  search(): void {
    if (this.searchKeyword.trim().length > 0) {
      this.searchResults = this.productService.searchProducts(
        this.searchKeyword
      );
    } else {
      this.searchResults = [];
    }
  }

  cancel(): void {
    this.searchResults = [];
  }
}
