import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { iProducts } from '../../Models/i-products';

@Component({
  selector: 'app-pref',
  templateUrl: './pref.component.html',
  styleUrl: './pref.component.scss'
})
export class PrefComponent {

  prefArray:iProducts[] = this.productSvc.prefArray

  constructor(private productSvc: ProductService ){}



}
