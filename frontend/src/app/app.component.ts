import { Component } from '@angular/core';
import {SearchPanelComponent} from "./layout/search-panel/search-panel.component";
import {TextPanelComponent} from "./layout/text-panel/text-panel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchPanelComponent, TextPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
