import { Component } from '@angular/core';
import { iCar } from '../../Models/i-car';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {
  carsArr:iCar[] = []
  audiLogoURL:string = ''
  brandFiltered:iCar[] = []

  ngOnInit(){

    this.getCars().then(()=>{
      this.brandFiltered = this.filterToBrand(this.carsArr, 'Audi')
    })

  }

  async getCars(){

    const response = await fetch('../../../assets/json/db.json')
    const cars = <iCar[]> await response.json()

    this.carsArr = cars
    this.audiLogoURL = this.getLogoUrl('Audi')
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
