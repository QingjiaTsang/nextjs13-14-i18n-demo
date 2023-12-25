const dictionaries = {
  'en-US': () => import('./en.json').then((r) => r.default),
  'zh-CN': () => import('./zh.json').then((r) => r.default),
};

export const getDictionary = (lang: 'en-US' | 'zh-CN') => {
  console.log('lang', lang);
  return dictionaries[lang]();
};
