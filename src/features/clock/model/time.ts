import {createEvent, createStore, restore, sample} from 'effector';
import {interval} from 'patronum';
import {$timezone} from './timezone';


export const startClock = createEvent();
export const stopClock = createEvent();
export const setLocale = createEvent<string>();
export const $locale = restore(setLocale, navigator.language);

export const TICK_INTERVAL_MS = 1000;

export const {tick} = interval({
  timeout: TICK_INTERVAL_MS,
  start: startClock,
  stop: stopClock,
});

export const $time = createStore('');

export const getLocaleTime = (locale: string, timeZone: string): string => {
  return new Date().toLocaleTimeString(locale, {timeZone});
}

sample({
  source: [$timezone, $locale],
  clock: tick,
  fn: ([timeZone, locale]) => getLocaleTime(locale, timeZone),
  target: $time
});

tick();

startClock();
