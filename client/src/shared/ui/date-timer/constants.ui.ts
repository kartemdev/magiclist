import { DateTimerTypesEnum } from './types.ui';

export const DATE_TIMER_TYPES = {
  [DateTimerTypesEnum.Full]: ['days', 'hours', 'minutes', 'seconds'],
  [DateTimerTypesEnum.Hour]: ['hours', 'minutes', 'seconds'],
  [DateTimerTypesEnum.Minute]: ['minutes', 'seconds'],
  [DateTimerTypesEnum.Second]: ['days', 'hours', 'minutes', 'seconds'],
};
