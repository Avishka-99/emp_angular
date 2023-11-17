import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductServiceService } from './product-service.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public prod:any=[];
  tableHeadings = ['ID','Name','Country','Age']
  ngOnInit():void{
    this.prod=this.products.getProducts();
  }
  constructor(private products:ProductServiceService){}

}
