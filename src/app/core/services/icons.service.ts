import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export interface SvgIcon {
  iconName: string;
  fileName: string;
}

export const ICONS: SvgIcon[] = [
  // {
  //   iconName: 'bitrix',
  //   fileName: 'bitrix',
  // },
];

@Injectable({
  providedIn: 'root',
})
export default class IconsService {
  private _iconPath = 'assets/icons/';

  constructor(
    private _registry: MatIconRegistry,
    private _sanitizer: DomSanitizer,
  ) {}

  init() {
    const matFontSetClass = this._registry.getDefaultFontSetClass();
    this._registry.setDefaultFontSetClass('basic-icons', 'mat-ligature-font');
    console.log('Default font set class after:', this._registry.getDefaultFontSetClass());

    this._registry.registerFontClassAlias('material', matFontSetClass.join(' '));


    ICONS.forEach((icon) => {
      this._registry.addSvgIcon(
        icon.iconName,
        this._sanitizer.bypassSecurityTrustResourceUrl(`${this._iconPath + icon.fileName}.svg`),
      );
    });
  }
}
