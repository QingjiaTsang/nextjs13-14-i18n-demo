import Image from 'next/image';
import { getDictionary } from '@/i18n/dictionaries';

import About from '@/app/[lang]/about/About';

export default async function AboutPage({ params }: { params: { lang: 'en-US' | 'zh-CN' } }) {
  const lang = await getDictionary(params.lang);

  console.log('params for About', lang);

  return <About lang={lang} />;
}
