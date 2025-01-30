import {APP_INITIALIZER, NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatIcon} from "@angular/material/icon";
import IconsService from "./core/services/icons.service";
import {AppInit} from "./app-init";

@NgModule({
  declarations: [],
  imports: [
    MatTabGroup,
    MatTab,
    MatIcon,
    AppComponent
  ],
  providers: [
    {provide: APP_INITIALIZER,
      deps: [IconsService],
      useFactory: AppInit,
      multi: true
    }
  ]

})

export class AppModule {}
