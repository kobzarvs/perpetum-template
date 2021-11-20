import React from 'react';
import {Event} from 'effector';


export const LocaleSelect = ({locale, onChange}: {locale: string; onChange: Event<string>}) => (
  <select className="select"
          data-testid="locale-select"
          style={{width: 80}}
          value={locale}
          onChange={e => onChange(e.target.value)}
  >
    {navigator.languages.map(lang => (
      <option key={lang} value={lang}>
        {lang}
      </option>
    ))}
  </select>
);
