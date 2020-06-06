import { Component, OnInit } from '@angular/core';
import{ingredients} from '../shared/ingrediendts.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: ingredients[]=[
new ingredients('Banana', 5),new ingredients('Tomato', 5)

];
  constructor() { }

  ngOnInit() {
  }

}
