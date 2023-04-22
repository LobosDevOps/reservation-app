import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { products } from './../../data/products';
import { first } from 'rxjs';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  product: any;

  ngOnInit(): void {
    this.route.paramMap.pipe(first()).subscribe((params: ParamMap) => {
      const productId = params?.get('productId');
      if(productId){
        this.product = products[+productId];
      }
    });
  }

}
