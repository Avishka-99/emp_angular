import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private myArray: any[] = [];
  constructor() {
    this.myArray = [
      { 'id': 1, 'name': 'Tikiri Marie', 'price': 310, 'qty': 34 },
      { 'id': 2, 'name': 'Lanka Soy 90g', 'price': 138, 'qty': 44 },
      { 'id': 3, 'name': 'Dhal 500g', 'price': 280, 'qty': 67 },
      { 'id': 4, 'name': 'Elephant house vanilla 1 litre', 'price': 520, 'qty': 23 },
      { 'id': 5, 'name': 'Lux soap', 'price': 110, 'qty': 78 }
    ]
  }
  getProducts() {
    return this.myArray;
  }
  updateArray(newData: any): any {
    //console.log(newData)
    this.myArray.push(newData[0])
    return (this.myArray)

  }
}
