import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS } from '@angular/material/slide-toggle';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import {provideMomentDateAdapter} from "@angular/material-moment-adapter";

export const matFormFieldProvider = {
  provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
  useValue: {
    appearance: 'outline',
    subscriptSizing: 'dynamic',
    color: 'primary',
  },
};

export const matSlideToggleProvider = {
  provide: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,
  useValue: {
    color: 'primary',
  },
};

export const matTooltipProvider = {
  provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
  useValue: {
    showDelay: 1000,
    hideDelay: 0,
    touchendHideDelay: 1500,
    position: 'after',
    positionAtOrigin: true,
  },
};

export const matSnackBarProvider = {
  provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
  useValue: {
    horizontalPosition: 'start',
    verticalPosition: 'bottom',
    duration: 3000,
  },
};

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD.MM.YYYY',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

export const matProviders = [
  matFormFieldProvider,
  matSlideToggleProvider,
  matSnackBarProvider,
  matTooltipProvider,
  provideMomentDateAdapter(MY_FORMATS, { useUtc: true }),
];
