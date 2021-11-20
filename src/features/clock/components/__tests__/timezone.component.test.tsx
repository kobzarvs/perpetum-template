import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {TimezoneSelect} from '../timezone-select';
import userEvent from '@testing-library/user-event';
import {$timezone, setTimezone} from '../../model/timezone';
import {Clock} from '../index';


const MOSCOW_OPTION = 'Europe/Moscow';
const NEW_YORK_OPTION = 'America/New_York';
const TIMEZONE_COUNT = 347;


test('when mounted should be found by testid/label and has valid options', async () => {
  render(<TimezoneSelect timezone={$timezone.getState()} onChange={setTimezone}/>);

  expect(await screen.findByTestId('timezone-select')).toBeInTheDocument();
  expect(await screen.findAllByRole('option')).toHaveLength(TIMEZONE_COUNT);
});


test('should be change timezone when select another option', async () => {
  render(<Clock />);

  const tzSelect = screen.getByTestId<HTMLSelectElement>('timezone-select');

  expect(tzSelect).toBeInTheDocument();
  expect(tzSelect).toHaveValue(MOSCOW_OPTION);

  const newYorkOption = screen.getByRole<HTMLOptionElement>('option', {
    name: /.*New_York$/,
  });
  expect(newYorkOption.selected).toBeFalsy();

  userEvent.selectOptions(tzSelect, newYorkOption);

  expect(tzSelect).toHaveValue(NEW_YORK_OPTION);
  expect(newYorkOption.selected).toBeTruthy();
});
