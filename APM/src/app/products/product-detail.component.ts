import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle = `:${id}`;
    this.product = {
      'productId': id,
      productName: 'Some name',
      productCode: '10',
      releaseDate: '',
      description: '',
      price: 1,
      starRating: 1,
      imageUrl: ''
    }
  }

  OnBack(): void {
    this.router.navigate(['/products']);
  }
}
