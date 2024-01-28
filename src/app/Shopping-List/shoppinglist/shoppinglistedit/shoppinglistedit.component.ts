import { Component, ElementRef, EventEmitter, ViewChild, Output } from '@angular/core';
import { Ingredient } from 'src/app/Models/shared/ingredient.model';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent {
  @Output() newIngredient = new EventEmitter<Ingredient>();
  @ViewChild('inputIngredient',{static: false}) inputIngredient : ElementRef
  @ViewChild('inputAmount',{static: false}) inputAmount : ElementRef

  OnAddItem(){
    const ingName = this.inputIngredient.nativeElement.value
    const ingAmount = this.inputAmount.nativeElement.value
    const newIngredient = new Ingredient(ingName,ingAmount)
    this.newIngredient.emit(newIngredient)
  }

}
