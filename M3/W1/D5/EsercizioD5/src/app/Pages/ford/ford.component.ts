import { Component } from '@angular/core';
import { iCar } from '../../Models/i-car';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {

  carsArr:iCar[] = []
  fordLogoURL:string = ''
  brandFiltered:iCar[] = []

  ngOnInit(){

    this.getCars().then(()=>{
      this.brandFiltered = this.filterToBrand(this.carsArr, 'Ford')
    })

  }

  async getCars(){

    const response = await fetch('../../../assets/json/db.json')
    const cars = <iCar[]> await response.json()

    this.carsArr = cars
    this.fordLogoURL = this.getLogoUrl('Ford')
    console.log('carsArr', this.carsArr);
}

getLogoUrl(brand:string):any {
  let brandType = this.carsArr.find(p => p.brand == brand);

    if(brandType) return brandType.brandLogo
}

filterToBrand(cars:iCar[], brand:string):any {
   let filteredCars:iCar[] = cars.filter(p=> p.brand == brand)

   if(filteredCars.length>0) return filteredCars
}

goToLowerCase(brand:string){
  return brand.toLowerCase()
}

}
