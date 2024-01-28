import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe-book/Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWithDetail = new EventEmitter<{RecipeDetail : Recipe}>();
  recipes : Recipe[] = [
    new Recipe('A Test Recipe 1','This is just a test recipe','https://islandinthenet.com/wp-content/uploads/2023/02/X-T3_20230213_9164_Edit-3.jpg'),
    new Recipe('A Test Recipe 2','This is just a test recipe','https://islandinthenet.com/wp-content/uploads/2023/02/X-T3_20230213_9164_Edit-3.jpg'),
    new Recipe('A Test Recipe 3','This is just a test recipe','https://islandinthenet.com/wp-content/uploads/2023/02/X-T3_20230213_9164_Edit-3.jpg')
  ]


  constructor() {}

  OpenRecipeInDetail(RecipeDetail){
    this.recipeWithDetail.emit(RecipeDetail)
  }
}
