import { Component } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {fastFoodSharp} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonicModule
  ],
})
export class AppComponent {
  constructor() {
    addIcons({ fastFoodSharp });
  }
}
