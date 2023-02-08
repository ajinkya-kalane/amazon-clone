import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})

export class ProductsComponent implements OnInit {
  products = [
    { name: 'Product 1' },
    { name: 'Product 2' },
    { name: 'Product 3' },
    // ...
  ];
  
  productsPerPage = 2;
  currentPage = 1;
  totalPages = Math.ceil(this.products.length / this.productsPerPage);
  productsToDisplay: { name: string; }[] | undefined;
  
  ngOnInit() {
    this.updateProductsToDisplay();
  }
  
  previousPage() {
    this.currentPage--;
    this.updateProductsToDisplay();
  }
  
  nextPage() {
    this.currentPage++;
    this.updateProductsToDisplay();
  }
  
  updateProductsToDisplay() {
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    this.productsToDisplay = this.products.slice(startIndex, startIndex + this.productsPerPage);
  }
}
