import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideHttpClient} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideMomentDateAdapter } from '@angular/material-moment-adapter';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideMomentDateAdapter(), // Подключение Moment.js для Datepicker
  ],
})
  .catch((err) => console.error(err));
