import { Component, ViewChild } from '@angular/core';
import { iProducts } from '../../Models/i-products';
import { ProductService } from '../../Services/product.service';
import { CardsComponent } from '../../Components/cards/cards.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  allProducts:iProducts[] = []

  @ViewChild('card-button') cardButton!:CardsComponent;

  constructor(private productSvc: ProductService ){}

  ngOnInit(){
    this.productSvc.getAllProduct().subscribe
    (product =>this.allProducts = product)
    console.log('prodotti: ', this.allProducts);

  }

  addToPref(product:iProducts){
    this.productSvc.addToPref(product)
  }

}
