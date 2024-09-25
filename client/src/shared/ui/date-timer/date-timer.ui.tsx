import { useMemo } from 'react';

import { DATE_TIMER_TYPES } from './constants.ui';
import { DateTimerPayloadValues, DateTimerTypesEnum } from './types.ui';

import './date-timer.ui.scss';

interface IProps {
  type: DateTimerTypesEnum;
  payloadValues: DateTimerPayloadValues;
}

const DateTimer: React.FC<IProps> = ({ type, payloadValues }) => {
  const dateTimerType = useMemo(() => DATE_TIMER_TYPES[type], [type]);

  const dateTimeValues = useMemo(
    () =>
      dateTimerType.map((value: Key<typeof payloadValues>) => {
        const dateValue = payloadValues[value];

        return dateValue.toString().length === 1 ? `0${dateValue}` : dateValue.toString();
      }),
    [type, payloadValues],
  );

  return (
    <span className='ml-date-timer'>
      {dateTimeValues.map((value, index) => (
        <span className='ml-date-timer__item' key={index}>
          {value}
        </span>
      ))}
    </span>
  );
};

export default DateTimer;
