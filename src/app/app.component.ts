import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Course-project';
linkName:string='ShoppingList';
  AppNavigation(LinkName:string){
    this.linkName=LinkName;



  }
}
