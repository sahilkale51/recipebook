import { Component, Input } from '@angular/core';
import { Recipe } from '../Models/recipe-book/Recipe';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent {
  @Input() recipe : Recipe;

}
