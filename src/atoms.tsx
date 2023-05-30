import { atom } from "recoil";

export const isDarkThemeState = atom({
  key: "defaultTheme",
  default: false,
});
