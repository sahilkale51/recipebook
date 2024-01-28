import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipebook';
  selectedFeature : string = 'recipe'

  onNavigation(feature: string){
    this.selectedFeature = feature;
  }

}
