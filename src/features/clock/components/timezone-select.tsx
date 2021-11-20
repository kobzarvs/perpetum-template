import React from 'react';
import {timezoneList} from '../model/timezone';
import {Event} from 'effector';


export const TimezoneSelect = ({timezone, onChange}: {
  timezone: string;
  onChange: Event<string>;
}) => (
  <select data-testid="timezone-select"
          className="select"
          style={{width: 'calc(100% - 100px)'}}
          value={timezone}
          onChange={e => onChange(e.target.value)}
  >
    {timezoneList.map((name, idx) => (
      <option key={idx} value={name}>
        {name}
      </option>
    ))}
  </select>
);
