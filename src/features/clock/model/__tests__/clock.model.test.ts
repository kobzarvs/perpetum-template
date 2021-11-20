import '@testing-library/jest-dom';
import {$time, startClock, stopClock, tick} from '../time';
import {$timezone, setTimezone} from '../timezone';
import {allSettled, fork} from 'effector';
import {watch} from '../../../../lib/testing-helpers';


describe('time', () => {
  beforeEach(() => {
    stopClock();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('when clock is started, $time value will be changing by tick event', async () => {
    const scope = fork();
    const [_tick, unwatch] = watch(tick);
    // опускаем директиву await
    allSettled(startClock, {scope});

    for (let i = 1; i <= 5; ++i) {
      const prevTime = scope.getState($time);
      // запускаем таймеры типа setTimeout и мгновенно получаем результат
      await jest.runOnlyPendingTimers();
      // ожидаем что tick.watch i-раз вызовет _tick === jest.fn()
      expect(_tick).toHaveBeenCalledTimes(i);
      expect(scope.getState($time)).not.toBe(prevTime);
    }
    unwatch();
  });

  test('when clock stopped $time value never will be change', async () => {
    const scope = fork();
    const [_tick, unwatch] = watch(tick);
    const prevTime = scope.getState($time);

    allSettled(startClock, {scope});
    await jest.runOnlyPendingTimers();

    expect(_tick).toHaveBeenCalledTimes(1); // tick called
    expect(scope.getState($time)).not.toBe(prevTime); // time is changed

    const lastTime = scope.getState($time); // save time before next tick

    allSettled(stopClock, {scope}); // stop clock
    await jest.runOnlyPendingTimers(); // time machine! skip timers

    expect(_tick).toHaveBeenCalledTimes(1); // the counter will not be change
    expect(scope.getState($time)).toBe(lastTime); // the value will not be change

    unwatch();
  });
});


describe('timezone', () => {
  test('event setTimezone should change $timezone store', () => {
    const scope = fork();

    expect(scope.getState($timezone)).toBe('Europe/Moscow');
    allSettled(setTimezone, {scope, params: 'America/New_York'});
    expect(scope.getState($timezone)).toBe('America/New_York');
  });
});

