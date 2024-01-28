import { Component } from '@angular/core';
import { Recipe } from '../Models/recipe-book/Recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  SelectedRecipe : Recipe;
}
