import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe-book/Recipe';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent {
@Input() Recipe : Recipe



}
