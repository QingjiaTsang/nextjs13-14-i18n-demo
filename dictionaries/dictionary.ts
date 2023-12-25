const dictionaries = {
  en: () => import('./en.json').then((r) => r.default),
  zh: () => import('./zh.json').then((r) => r.default),
};

export const getDictionary = (lang: 'en' | 'zh') => {
  return dictionaries[lang]();
};
