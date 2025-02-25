import {Component, OnInit} from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatIcon} from "@angular/material/icon";
import IconsService from "./core/services/icons.service";
import {MatDialog} from "@angular/material/dialog";
import {VacationPayDialogComponent} from "./modules/vacation/vacation-pay-dialog/vacation-pay-dialog.component";
import {
  RegistrationDialogComponent
} from "./modules/auth/componenets/registration-dialog/registration-dialog.component";
import {VacationTableComponent} from "./modules/vacation/vacation-table/vacation-table.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    MatTabGroup,
    MatTab,
    MatIcon,
    VacationTableComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'moneywise';

  constructor(private _iconsService: IconsService, private _dialog: MatDialog) {
    this._iconsService.init();
  }

  openVacationPayDialog() {
    this._dialog.open(VacationPayDialogComponent, {
      disableClose: true
    })
  }

  openRegistrationDialog() {
    this._dialog.open(RegistrationDialogComponent, {
      disableClose: true
    })
  }

}
