import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Input() searchText = '';
  @Input() selectedCategory = 'All products';
  @Output() searchChange = new EventEmitter<string>();
  @Output() categoryChange = new EventEmitter<string>();

  menuOpen = false;
  categories = ['All products', 'Shoes', 'Clothing', 'Running'];

  closeMenu() {
    this.menuOpen = false;
  }

  submitSearch(event: Event) {
    event.preventDefault();
    this.closeMenu();
    document.getElementById('products')?.scrollIntoView();
  }
}
