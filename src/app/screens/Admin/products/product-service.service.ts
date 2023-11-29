import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private myArray: any[] = [];
  constructor() {
    this.getProducts()
  }
  async getProducts() {
    try {
      let data = await axios.get("https://localhost:7185/api/products");
      //console.log(data.data)
      return data.data
    } catch (error) {
      console.log(error)
    }
  }
  async addProducts(name: string, price: number, qty: number) {
    console.log(qty)
    try {
      await axios.post("https://localhost:7185/api/products", {
        "name": name,
        "price": price,
        "quantity": qty,
      })
    } catch (error) {

    }
  }
  async deleteProduct(id: string) {
    console.log(id)
    // try {
    //   await axios.post("https://localhost:7185/api/products", {
    //     params: {
    //       id: id,
    //     }
    //   }).then((response) => {
    //     console.log(response.data)
    //   })

    // } catch (error) {

    // }
  }
  async SearchProd(keyword: string) {
    try {

      let data = await axios.get(`https://localhost:7185/api/products/search/${keyword}`)
      return data.data
    } catch (error) {
      console.log(error)
    }
  }

  // async getProducts() {
  //   try {
  //     return await lastValueFrom(
  //       this.http.get("https://localhost:7185/api/products")
  //     )
  //   } catch (error) {
  //     console.log(error)
  //     return null;
  //   }
  //   // axios.get("https://localhost:7185/api/products").then((response) => {
  //   //   this.myArray = response.data;
  //   //   console.log(response.data)
  //   //   return this.myArray
  //   //   //console.log(response.data)
  //   // })
  // }
  // setProducts(newData: any): any {
  //   axios.post("https://localhost:7185/api/products", {
  //     newData

  //   }).then((response) => {
  //     this.getProducts()
  //   })
  //   //console.log(newData)
  //   //this.myArray.push(newData[0])
  //   //return (this.myArray)

  // }
}
