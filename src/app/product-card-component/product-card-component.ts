import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-card-component',
  imports: [CurrencyPipe],
  templateUrl: './product-card-component.html',
  styleUrl: './product-card-component.css',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}
