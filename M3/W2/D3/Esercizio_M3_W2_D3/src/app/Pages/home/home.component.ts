import { Component } from '@angular/core';
import { iProducts } from '../../Models/i-products';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  allProducts:iProducts[] = []


  constructor(private productSvc: ProductService ){}

  ngOnInit(){
    this.productSvc.getAllProduct().subscribe
    (product =>this.allProducts = product)
  }

}
