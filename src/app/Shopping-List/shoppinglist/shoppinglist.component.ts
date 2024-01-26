import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/Models/shared/ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
ingredients : Ingredient[] = [
  new Ingredient('Apples',5),
  new Ingredient('Tomatoes',2)
];

constructor(){}

ngOnInit() {
  
}

}
