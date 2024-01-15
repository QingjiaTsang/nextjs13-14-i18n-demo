'use client';
import React, { FC, useRef, useState } from 'react';

import { LangDictionary, i18nInterpolator } from '@/i18n/dictionaries';

import ReCAPTCHA from 'react-google-recaptcha';
import { verifyCaptcha } from '@/utils/verifyCaptcha';

type TProps = {
  lang: LangDictionary;
};
const About: FC<TProps> = ({ lang }) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);

  async function handleCaptchaSubmission(token: string | null) {
    // Server function to verify captcha
    try {
      const res = await verifyCaptcha(token);
      console.log('res', res);
      setIsverified(true);
    } catch (e) {
      setIsverified(false);
    }
  }

  return (
    <>
      <main className='h-screen flex justify-center items-center'>
        <div className=' space-y-1'>
          <div>{i18nInterpolator(lang.greeting, 'john')}</div>
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
          {/* <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_REACT_APP_SITE_KEY!}
            ref={recaptchaRef}
            onChange={handleCaptchaSubmission}
          />
          <button
            disabled={!isVerified}
            onClick={() => {
              console.log('submit');
            }}
          >
            Submit
          </button> */}
        </div>
      </main>
    </>
  );
};
export default About;
