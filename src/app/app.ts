import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { MainSliderComponent } from './main-slider-component/main-slider-component';
import { ProductCardComponent } from './product-card-component/product-card-component';
import { Footer } from './footer/footer';
import { Product } from './models/product';
import products from './data/products.json';

@Component({
  selector: 'app-root',
  imports: [Navbar, MainSliderComponent, ProductCardComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  product_list: Product[] = products;
  searchText = '';
  selectedCategory = 'All products';

  get filteredProducts(): Product[] {
    const search = this.searchText.trim().toLowerCase();
    return this.product_list.filter((product) => {
      const matchesCategory =
        this.selectedCategory === 'All products' ||
        product.category === this.selectedCategory ||
        product.collection === this.selectedCategory;
      const matchesSearch = (product.title + ' ' + product.collection)
        .toLowerCase()
        .includes(search);
      return matchesCategory && matchesSearch;
    });
  }

  clearFilters() {
    this.searchText = '';
    this.selectedCategory = 'All products';
  }
}
