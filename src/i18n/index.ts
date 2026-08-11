import en from './en.json';
import zh from './zh.json';

export const dictionaries = { en, zh } as const;
export type Lang = keyof typeof dictionaries;
export const defaultLang: Lang = 'en';
export const supportedLangs: Lang[] = ['en', 'zh'];

export function getDictionary(lang: Lang) {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}
