import { Component } from '@angular/core';
import {add, fastFoodSharp} from "ionicons/icons";
import {addIcons} from "ionicons";
import {
  IonApp,
  IonButton, IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonRouterOutlet,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    IonApp,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
    IonRouterOutlet,
    IonFooter,
    IonContent
  ],
})
export class AppComponent {
  constructor() {
    addIcons({ fastFoodSharp, add });
  }
}
