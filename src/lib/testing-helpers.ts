import {Event, Store, Subscription} from 'effector';
import Mock = jest.Mock;


export const wait = (ms = 0) => {
  return new Promise<void>(resolve => {
    setTimeout(resolve, ms);
  });
};

export const watch = (unit: Event<any> | Store<any>): [Mock, Subscription] => {
  const _unit = jest.fn();
  return [
    _unit,
    unit.watch(_unit),
  ];
};
