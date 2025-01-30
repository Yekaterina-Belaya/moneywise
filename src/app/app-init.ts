import IconsService from "./core/services/icons.service";

export const AppInit = (iconService: IconsService) => () => {
  console.log('AppInit: вызываем registerIcons');

  iconService.init();
}
