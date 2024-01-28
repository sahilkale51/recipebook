import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './Shopping-List/shoppinglist/shoppinglist.component';
import { ShoppinglisteditComponent } from './Shopping-List/shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { RecipeitemComponent } from './recipeitem/recipeitem.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { DropdownDirective } from './Models/shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent,
    RecipeitemComponent,
    RecipedetailComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
