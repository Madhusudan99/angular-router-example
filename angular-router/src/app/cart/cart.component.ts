import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private dataService: DataService) { }

  cartList: any;
  insertIntoCartList(data: any) {
    this.cartList = data;
    // console.log(this.productsList);
  }
  ngOnInit(): void {
    this.dataService.getCartItems().subscribe((data) => this.insertIntoCartList(data))
  }
 

}
