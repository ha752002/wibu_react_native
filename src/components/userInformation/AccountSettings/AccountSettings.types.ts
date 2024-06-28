import { EIconName } from '~/enums/icon.enum';
import { ScreenNames } from '~/enums/screenNames.enum';

export type AccountSettingsProps = {
  logIn?: boolean;
};

interface AccountSettingslist {
  title: string;
  nextScreen?: nextScreenType;
  icon: EIconName;
}

export type nextScreenType =
  | ScreenNames.MY_SELF
  | ScreenNames.LOGIN
  | ScreenNames.REGISTER
  | ScreenNames.LOGIN;

export const userData: AccountSettingslist[] = [
  {
    title: 'my personal page',
    nextScreen: ScreenNames.MY_SELF,
    icon: EIconName.PLUS,
  },
  {
    title: 'change account',
    nextScreen: ScreenNames.LOGIN,
    icon: EIconName.PLUS,
  },
  {
    title: 'Edit personal information',
    nextScreen: ScreenNames.REGISTER,
    icon: EIconName.PLUS,
  },
  {
    title: 'log out',
    // nextScreen : ScreenNames.REGISTER,
    icon: EIconName.PLUS,
  },
];
