import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  productsUrl = "http://192.168.2.85:3000/products"
  cartUrl = "http://192.168.2.85:3000/cart"
  getProducts() {
    return this.http.get(this.productsUrl);
  }

  addToCart(data: any) {
    return this.http.post(this.cartUrl, data);
  }
  getCartItems() {
    return this.http.get(this.cartUrl);
  }
}
