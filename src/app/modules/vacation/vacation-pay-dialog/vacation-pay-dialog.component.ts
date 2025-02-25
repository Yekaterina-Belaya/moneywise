import {Component} from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'mw-vacation-pay-dialog',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatIcon,
    MatDialogClose,
    MatDialogTitle,
    MatButton,
    MatInput,
    ReactiveFormsModule,
    MatFormField,
    NgIf,
    FormsModule,
  ],
  templateUrl: './vacation-pay-dialog.component.html',
  styleUrl: './vacation-pay-dialog.component.scss'
})
export class VacationPayDialogComponent{
  average = 0;
  period = 0;

  constructor(private _dialog: MatDialogRef<VacationPayDialogComponent>) {}

  close() {
    this._dialog.close();
  }

}
