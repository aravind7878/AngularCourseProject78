import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  AppHeader} from './Header/app.Header.Componenet';
import { RecpieComponent } from './recpie/recpie.component';
import { RecipeListComponent } from './Recpie/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './Recpie/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './Recpie/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    RecpieComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
