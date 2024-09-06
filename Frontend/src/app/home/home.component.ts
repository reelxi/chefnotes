import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonCol,
  IonContent, IonGrid, IonImg, IonRow
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
    IonCol
  ],
  standalone: true
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
