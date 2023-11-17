import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductServiceService } from './product-service.service';
import { TableComponent } from "../table/table.component";
@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  imports: [CommonModule, TableComponent]
})
export class ProductsComponent implements OnInit {
  public prod: any = [];
  public staff: any = "products"
  tableHeadings = ['Product ID', 'Name', 'Price (Rs.)', 'QTY']
  ngOnInit(): void {
    this.prod = this.products.getProducts();
    console.log(this.prod)
  }
  constructor(private products: ProductServiceService) { }
  regProduct(name: HTMLInputElement, price: HTMLInputElement, qty: HTMLInputElement, event: Event): void {
    event.preventDefault();
    const newObj = {
      'id': Math.random() * 101 | 0, 'name': name.value, 'price': parseInt(price.value), 'qty': parseInt(qty.value)
    }
    console.log(newObj);
    this.products.updateArray([newObj])

  }

}
