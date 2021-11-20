import React from 'react';
import {setLocale} from '../model/time';


export const LocaleSelect = ({locale}: {locale: string}) => (
  <select className="select"
          data-testid="locale-select"
          style={{width: 80}}
          value={locale}
          onChange={e => setLocale(e.target.value)}
  >
    {navigator.languages.map(lang => (
      <option key={lang} value={lang}>
        {lang}
      </option>
    ))}
  </select>
);
