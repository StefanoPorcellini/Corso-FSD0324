import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { iProducts } from '../Models/i-products';
import { iDummyJson } from '../Models/i-dummy-json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl:string = 'https://dummyjson.com/products'



  constructor(private http:HttpClient) { }

  getAllProduct():Observable<iProducts[]>{
    return this.http.get<iDummyJson>(this.apiUrl).pipe(map(i => i.products))
  }

  findId(array:iProducts[], id:number): iProducts | undefined{
    return array.find(product => product.id === id)
  }

}
