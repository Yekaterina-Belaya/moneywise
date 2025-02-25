import {Component, OnInit} from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgIf} from "@angular/common";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'mw-registration-dialog',
  standalone: true,
  imports: [
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatIcon,
    ReactiveFormsModule,
    MatDialogActions,
    MatButton,
    MatFormField,
    MatDatepicker,
    MatSlideToggle,
    MatSelect,
    MatOption,
    NgIf,
    MatCheckbox,
    MatDatepickerToggle,
    MatInput,
    MatDatepickerInput,
    MatLabel
  ],
  templateUrl: './registration-dialog.component.html',
  styleUrl: './registration-dialog.component.scss'
})
export class RegistrationDialogComponent {
  options = [
    'Полная занятость',
    'Неполный рабочий день',
    'Проектая работа'
  ]
  form: any;

  constructor(private _dialog: MatDialogRef<RegistrationDialogComponent>, private _fb: FormBuilder) {
    this.form = this._fb.group({
      name: ['', Validators.required],
      occupation: ['', Validators.required],
      photo: [''],
      birthDate: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      staff: [''],
      hireDate: ['', Validators.required],
      contractType: ['', Validators.required],
      salary: [''],
      kpi: [''],
      document: [''],
      agreed: ['', Validators.requiredTrue]
    })
  }

  // TODO: сделать сложную форму

  close() {
    this._dialog.close()
  }

  submit() {
    console.log(this.form)
  }

}
