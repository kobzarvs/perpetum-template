import React from 'react';
import {useStore} from 'effector-react';
import {$timezone, setTimezone} from '../model/timezone';
import {$locale, $time, setLocale} from '../model/time';
import {LocaleSelect} from './locale-select';
import {TimezoneSelect} from './timezone-select';
import './styles.css';


export const Clock = () => {
  const timezone = useStore($timezone);
  const locale = useStore($locale);
  const time = useStore($time);

  return (
    <div
      className="Clock">
      <div className="whitespace-nowrap mr-2 font-bold">{time}</div>
      <TimezoneSelect timezone={timezone} onChange={setTimezone}/>
      <LocaleSelect locale={locale} onChange={setLocale}/>
    </div>
  );
};
