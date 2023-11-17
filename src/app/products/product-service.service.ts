import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private myArray: any[] = [];
  constructor() {
    this.myArray = [
      
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
