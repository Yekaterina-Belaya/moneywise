import {Component, OnInit} from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatIcon} from "@angular/material/icon";
import IconsService from "./core/services/icons.service";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    MatTabGroup,
    MatTab,
    MatIcon
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'moneywise';

  constructor(private _iconsService: IconsService) {
    this._iconsService.init();
  }

}
