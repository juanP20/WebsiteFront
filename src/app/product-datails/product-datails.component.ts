import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-datails',
  templateUrl: './product-datails.component.html',
  styleUrls: ['./product-datails.component.css']
})
export class ProductDatailsComponent implements OnInit {
  imageIndex: number = 1;
  constructor(){}
  ngOnInit(): void {
    
  }
}
