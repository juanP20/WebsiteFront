import { Component, OnInit } from '@angular/core';
import { SuggestedProduct } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  suggestedProducts: SuggestedProduct[] = [
    {
        banerimage:'Baner/Baner_Mobile.png',
        category :{
          id: 0,
          category: 'electronics',
          subcategory: 'mobiles'
        },
    },
    {
      banerimage:'Baner/Baner_Laptop.png',
      category :{
        id: 0,
        category: 'electronics',
        subcategory: 'Laptops'
      },
  },
  {
    banerimage:'Baner/Baner_Chair.png',
    category :{
      id: 0,
      category: 'furnitur',
      subcategory: 'Chairs'
    },
},
  ];
  constructor(){}
  ngOnInit():void{}
}
