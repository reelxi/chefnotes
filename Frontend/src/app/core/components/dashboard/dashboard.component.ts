import { Component, OnInit } from "@angular/core";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonRow,
} from "@ionic/angular/standalone";

@Component({
  selector: "app-home",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  imports: [
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
  ],
  standalone: true,
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
