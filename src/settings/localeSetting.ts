import type { DropMenu } from '../components/Dropdown';
import type { LocaleSetting, LocaleType } from '/#/config';

export const LOCALE: { [key: string]: LocaleType } = {
  ZH_CN: 'zh_CN',
  EN_US: 'en',
};

export const localeSetting: LocaleSetting = {
  showPicker: true,
  // Locale
  locale: LOCALE.EN_US,
  // Default locale
  fallback: LOCALE.EN_US,
  // available Locales
  availableLocales: [LOCALE.EN_US], //[LOCALE.EN_US, LOCALE.ID_ID]
};

// locale list
export const localeList: DropMenu[] = [
  {
    text: 'English',
    event: LOCALE.EN_US,
  },
  // {
  //   text: 'Bahasa Indonesia',
  //   event: LOCALE.ID_ID,
  // },
];
