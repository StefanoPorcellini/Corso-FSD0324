import { Component, Input } from '@angular/core';
import { iProducts } from '../../Models/i-products';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

 
  allProducts:iProducts[] = []


  constructor(private productSvc: ProductService ){}

  ngOnInit(){
    this.productSvc.getAllProduct().subscribe
    (product =>this.allProducts = product)
  }

  @Input() product!:iProducts



}
