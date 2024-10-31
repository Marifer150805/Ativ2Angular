import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] = [
    { id: 1, name: 'O medico e o monstro', price: 45.0, description: 'Robert Stevenson', image:'../image.png'},
    { id: 2, name: 'O vilarejo', price: 20.5, description: 'Rafael Montes', image:'../image copy.png'},
    { id: 3, name: 'Suicidas', price: 90.0, description: 'Rafael Montes', image:'../image copy 2.png'},
    { id: 1, name: 'O medico e o monstro', price: 45.0, description: 'Robert Stevenson', image:'../image.png'},
    { id: 2, name: 'O vilarejo', price: 20.5, description: 'Rafael Montes', image:'../image copy.png'},
    { id: 3, name: 'Suicidas', price: 90.0, description: 'Rafael Montes', image:'../image copy 2.png'},
    { id: 1, name: 'O medico e o monstro', price: 45.0, description: 'Robert Stevenson', image:'../image.png'},
    { id: 2, name: 'O vilarejo', price: 20.5, description: 'Rafael Montes', image:'../image copy.png'},
    { id: 3, name: 'Suicidas', price: 90.0, description: 'Rafael Montes', image:'../image copy 2.png'},
    { id: 1, name: 'O medico e o monstro', price: 45.0, description: 'Robert Stevenson', image:'../image.png'},
    { id: 2, name: 'O vilarejo', price: 20.5, description: 'Rafael Montes', image:'../image copy.png'},
    { id: 3, name: 'Suicidas', price: 90.0, description: 'Rafael Montes', image:'../image copy 2.png'},
  ];

  getProducts(): Iproducts[]{
    return this.products;
  }
}
