import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductServiceService } from './product-service.service';
import { TableComponent } from "../../../components/table/table.component";
import { Router } from '@angular/router';
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
  constructor(private products: ProductServiceService, private router: Router) {
    this.products.getProducts().then((result) => {
      this.prod = result;
      console.log(this.prod)
    });
  }
  async delProduct(id: string): Promise<void> {
    await axios.delete(`https://localhost:7185/api/products/${id}`).then((response) => {
    })
  }
  async loadData() {
    try {
      let data = await axios.get("https://localhost:7185/api/products");
      this.prod = data.data
    } catch (error) {
      console.log(error)
    }

    //console.log(data)
  }



  async regProduct(name: HTMLInputElement, price: HTMLInputElement, qty: HTMLInputElement, event: Event): Promise<void> {
    event.preventDefault();
    if (name.value == '' || price.value == '' || qty.value == '') {
      alert('Please fill required fields')
    } else {
      this.products.addProducts(name.value, parseFloat(price.value), parseInt(qty.value)).then(() => {
        this.products.getProducts().then((result) => {
          this.prod = result;
        });
      })
    }

  }

  async searchProd(keyword: string): Promise<void> {
    console.log(this.prod);
    await this.products.SearchProd(keyword).then((response) => {
      this.prod = response
    });
  }
  async updateProduct(id: HTMLSelectElement, price: HTMLInputElement, qty: HTMLInputElement, event: Event): Promise<void> {
    event.preventDefault();
    console.log(id.value, '-', price.value, '-', qty.value)
    if (id.value != '' && ((price.value != '' && qty.value == '') || (price.value == '' && qty.value != '') || (price.value != '' && qty.value != ''))) {
      this.products.updateProducts(parseInt(id.value), parseFloat(price.value), parseInt(qty.value)).then((response) => {
        this.products.getProducts().then((result) => {
          this.prod = result;
        });
      })
    } else {
      alert('Please fill all required fields')
    }
    // else{
    //   this.products.updateProducts(parseInt(id.value), parseFloat(price.value), parseInt(qty.value)).then(() => {
    //     // this.products.getProducts().then((result) => {
    //     //   this.prod = result;
    //     // });
    //   })
    // }
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
