import { Component, OnInit } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { ToolbarComponent } from "../toolbar/toolbar.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  standalone: true,
  imports: [IonicModule, ToolbarComponent],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
