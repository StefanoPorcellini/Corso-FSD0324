import { Component } from '@angular/core';
import { iCar } from '../../Models/i-car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  carsArr:iCar[] = []

  randomCars:iCar[] = []

  fiatLogoURL:string = ''
  fordLogoURL:string = ''
  audiLogoURL:string = ''
  goToBrandPage:string =''


  ngOnInit(){

    this.getCars().then(()=>{
    this.randomCars = this.getRandomCars()
    console.log('random car:', this.randomCars)

  })



  }

  async getCars(){

    const response = await fetch('../../../assets/json/db.json')
    const cars = <iCar[]> await response.json()

    this.carsArr = cars
    this.fiatLogoURL = this.getLogoUrl('Fiat')
    this.fordLogoURL = this.getLogoUrl('Ford')
    this.audiLogoURL = this.getLogoUrl('Audi')

  }

  getRandomCars(): iCar[] {
    const shuffled = [...this.carsArr].sort(()=>0.5-Math.random())
    return shuffled.slice(0, 2)
  }

  getLogoUrl(brand:string):any {
  let brandType = this.carsArr.find(p => p.brand == brand);

    if(brandType) return brandType.brandLogo
}

goToLowerCase(brand:string){
  return brand.toLowerCase()
}

}
