import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductServiceService } from './product-service.service';
import { TableComponent } from "../../../components/table/table.component";
import axios from 'axios';
@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  imports: [CommonModule, TableComponent]
})
export class ProductsComponent {
  [x: string]: any;
  public prod: any = [];
  public staff: any = "products"
  tableHeadings = ['Name', 'Price (Rs.)', 'QTY', '']
  constructor(private products: ProductServiceService) {
    this.products.getProducts().then((result) => {
      this.prod = result;
      console.log(this.prod)
    });
  }
  async delProduct(id: string): Promise<void> {
    console.log(this.prod)
  }
  async loadData() {
    try {
      let data = await axios.get("https://localhost:7185/api/products");
      console.log(data.data)
    } catch (error) {
      console.log(error)
    }

    //console.log(data)
  }



  regProduct(name: HTMLInputElement, price: HTMLInputElement, qty: HTMLInputElement, event: Event): void {
    event.preventDefault();
    this.products.addProducts(name.value, parseFloat(price.value), parseInt(qty.value)).then(() => {
      this.products.getProducts().then((result) => {
        this.prod = result;
      });
    })
  }

  async searchProd(keyword: string): Promise<void> {
    //console.log(this.prod);
    // await this.products.SearchProd(keyword).then((response) => {
    //   this.prod = response
    // });
  }
  //await this.products.deleteProduct(id)


  /*await axios.delete(`https://localhost:7185/api/products/${id}`).then(async (response) => {
    try {
      const newArr = this.prod.filter((row: any) => row.id != response.data)
      console.log(newArr)
      console.log(response.data)
      //this.prod = data.data
    } catch (error) {
      console.log(error)
    }
  })*/

  //this.products.deleteProduct(id)
  //console.log(id)
  //this.products.deleteProduct(id)
  // await axios.delete(`https://localhost:7185/api/products/${id}`).then(async () => {
  //   try {
  //     let data = await axios.get("https://localhost:7185/api/products");
  //     console.log(data.data)
  //     this.prod = data.data
  //   } catch (error) {
  //     console.log(error)
  //   }
  // })

}
