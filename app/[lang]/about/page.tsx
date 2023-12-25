import Image from 'next/image';
import { getDictionary } from '@/i18n/dictionaries';

export default async function About({ params }: { params: { lang: 'en-US' | 'zh-CN' } }) {
  const lang = await getDictionary(params.lang);

  console.log('params for About', lang);

  return (
    <main className='h-screen flex justify-center items-center'>
      <div className=' space-y-1'>
        <div>
          <label>{lang.form.name} </label>
          <input type='text' className='border border-1 border-blue-500' />
        </div>
        <div>
          <label>{lang.form.email} </label>
          <input type='email' className='border border-1 border-blue-500' />
        </div>
        <div>
          <label>{lang.form.city} </label>
          <input type='text' className='border border-1 border-blue-500' />
        </div>
      </div>
    </main>
  );
}
