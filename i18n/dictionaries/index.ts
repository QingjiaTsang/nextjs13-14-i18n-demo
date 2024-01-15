type EnUsJson = typeof import('./en-US.json');
type ZhCnJson = typeof import('./zh-CN.json');

export type LangDictionary = Awaited<ReturnType<typeof getDictionary>>;

const dictionaries = {
  'en-US': () => import('./en-US.json').then((r) => r.default),
  'zh-CN': () => import('./zh-CN.json').then((r) => r.default),
};

export const getDictionary = <T extends 'en-US' | 'zh-CN'>(
  lang: T
): T extends 'en-US' ? Promise<EnUsJson> : Promise<ZhCnJson> => {
  return dictionaries[lang]();
};

export const i18nInterpolator = (
  str: string | undefined,
  ...args: (string | undefined)[]
): string => {
  if (!str) {
    return '';
  }
  if (!args?.length) {
    return str;
  }

  return str.replace(/{([^{}]*)}/g, (match) => {
    const arg = args.shift();
    return typeof arg !== 'undefined' ? arg : match;
  });
};
