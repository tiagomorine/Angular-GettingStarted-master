import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product Lis1';
    imageWidth: number = 50;
    imageHeight: number = 25;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    
    _listFilter: string;
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string){
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [
    ]
    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    ngOnInit(): void {
      this.productService.getProducts().subscribe({
        next: products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err
      });
    }

    onRatingClicked(message: string): void {
      this.pageTitle = 'Product list::' + message;
    }

    constructor(private productService: ProductService){
    }

    performFilter(filterBy: string): IProduct[]{
      filterBy = filterBy.toLowerCase();
      return this.products.filter((product: IProduct) => 
        product.productName.toLowerCase().indexOf(filterBy) !== -1);
    }
}