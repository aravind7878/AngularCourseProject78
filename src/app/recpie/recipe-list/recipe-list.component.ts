import { Component, OnInit } from '@angular/core';
import { Recpie } from '../Recpie.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipes: Recpie[] =[new Recpie('MyRecipie', 'The test Recipe', 'https://www.modernhoney.com/wp-content/uploads/2016/02/The-Worlds-BEST-Chocolate-Cake-Recipe.jpg'),
  new Recpie('MyRecipie', 'The test Recipe', 'https://www.modernhoney.com/wp-content/uploads/2016/02/The-Worlds-BEST-Chocolate-Cake-Recipe.jpg')

];

  constructor() { }

  ngOnInit() {
  }

}
