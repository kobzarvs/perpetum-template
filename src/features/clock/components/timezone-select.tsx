import React from 'react';
import {setTimezone, timezoneList} from '../model/timezone';


export const TimezoneSelect = ({timezone}: {
  timezone: string;
}) => (
  <select data-testid="timezone-select"
          className="select"
          style={{width: 'calc(100% - 100px)'}}
          value={timezone}
          onChange={e => setTimezone(e.target.value)}
  >
    {timezoneList.map((name, idx) => (
      <option key={idx} value={name}>
        {name}
      </option>
    ))}
  </select>
);
