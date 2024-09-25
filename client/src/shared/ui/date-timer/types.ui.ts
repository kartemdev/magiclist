export enum DateTimerTypesEnum {
  Full = 'full',
  Hour = 'hour',
  Minute = 'minute',
  Second = 'second',
}

export interface DateTimerPayloadValues {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}
