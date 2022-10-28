export type Theme =
  | 'auto'
  | 'web95'
  | 'retro'
  | 'soft'
  | 'midnight'
  | 'minimal'
  | 'rounded'
  | 'nouns';
export type Mode = 'light' | 'dark' | 'auto';
export type CustomTheme = any; // TODO: define type
export type Languages = 'en';

export type All = {
  theme?: Theme;
  mode?: Mode;
  customTheme?: CustomTheme;
  lang?: Languages;
};

export type { CustomAvatarProps } from './components/Common/Avatar';
