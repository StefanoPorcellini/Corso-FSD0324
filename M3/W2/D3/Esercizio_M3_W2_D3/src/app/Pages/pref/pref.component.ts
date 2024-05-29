import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { iProducts } from '../../Models/i-products';

@Component({
  selector: 'app-pref',
  templateUrl: './pref.component.html',
  styleUrl: './pref.component.scss'
})
export class PrefComponent {

  allProducts:iProducts[] = []

  constructor(private productSvc: ProductService ){}

  ngOnInit(){
    this.productSvc.getAllProduct().subscribe
    (product =>this.allProducts = product)
  }


}
