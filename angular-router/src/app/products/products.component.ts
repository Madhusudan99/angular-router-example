import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  productsList: any;
  insertIntoProductsList(data: any) {
    this.productsList = data;
    // console.log(this.productsList);
  }
  ngOnInit(): void {
    this.dataService.getProducts().subscribe((data) => this.insertIntoProductsList(data))
  }
 
  addItemToCart(item: any) {
    item.id = Math.floor(Math.random() * 100)
    this.dataService.addToCart(item).subscribe((data) => console.log(data))
  }


}
