import { Component, Input } from '@angular/core';
import { iProducts } from '../../Models/i-products';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  preference:iProducts[] = []
  allProducts:iProducts[] = []


  constructor(private productSvc: ProductService ){}

  ngOnInit(){
    this.productSvc.getAllProduct().subscribe
    (product =>this.allProducts = product)
  }

  @Input() product!:iProducts

  addToPref(id:number){
    let pref = this.productSvc.filterById(this.allProducts, id)
    this.preference.push(pref)

    console.log('preferiti:', this.preference);

  }

}
