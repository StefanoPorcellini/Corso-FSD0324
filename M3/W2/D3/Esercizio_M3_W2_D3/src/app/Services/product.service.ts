import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, filter, map } from 'rxjs';
import { iProducts } from '../Models/i-products';
import { iDummyJson } from '../Models/i-dummy-json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl:string = 'https://dummyjson.com/products'

  prefArray:iProducts[] = []

  prefSubject = new BehaviorSubject<iProducts[]>([])
  pref$ = this.prefSubject.asObservable()

  constructor(private http:HttpClient) { }

  getAllProduct():Observable<iProducts[]>{
    return this.http.get<iDummyJson>(this.apiUrl).pipe(map(i => i.products))
  }

  findId(array:iProducts[], id:number): iProducts | undefined{
    return array.find(product => product.id === id)
  }

  addToPref(product:iProducts){
    this.prefArray.push(product)
    this.prefSubject.next(this.prefArray)
    console.log('lista preferiti: ', this.prefArray);

  }

}
