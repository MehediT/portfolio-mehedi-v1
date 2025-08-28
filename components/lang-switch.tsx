'use client';

import { useChangeLocale, useCurrentLocale } from '@/locales/client';

export default function LangSwitch() {
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  return (
    <>
      <button type="button" onClick={() => changeLocale(currentLocale === 'en' ? 'fr' : 'en')}>
        {currentLocale === 'en' ? 'EN' : 'FR'}
      </button>
    </>
  );
}