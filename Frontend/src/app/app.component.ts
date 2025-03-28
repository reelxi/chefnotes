import { Component } from "@angular/core";
import { add, fastFoodSharp } from "ionicons/icons";
import { addIcons } from "ionicons";
import { IonApp, IonContent, IonRouterOutlet } from "@ionic/angular/standalone";
import { HeaderComponent } from "./core/components/header/header.component";
import { FooterComponent } from "./core/components/footer/footer.component";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrl: "./app.component.scss",
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet,
    IonContent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  constructor() {
    addIcons({ fastFoodSharp, add });
  }
}
