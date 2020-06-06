import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-Header',
  templateUrl: './app.Header.html',
  styles:[]
})
export class AppHeader {
    title = 'Course-project';

@Output() LinkName = new EventEmitter<string>();
    Navigation(Name:string){

this.LinkName.emit(Name);


    }
  }
  