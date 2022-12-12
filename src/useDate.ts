import { DateFormat, format, isDate, toDayString, toMonthString, toYearString } from './utils';
import { useCallback, useMemo, useState } from 'react';

export interface UseDateResult extends UseDateState {
  format: (date: Date, format: DateFormat) => string;
  setDate: (date: Date) => void;
}

export interface UseDateState {
  originalDate: Date;
  date: Date;
  day: string;
  month: string;
  year: string;
}

export const useDate = (date: Date = new Date()): UseDateResult => {
  const originalDate = useMemo<Date>(() => date, [date]);

  const generateState = (date: Date): UseDateState => {
    return {
      originalDate,
      date: date,
      day: toDayString(date),
      month: toMonthString(date),
      year: toYearString(date),
    };
  };

  const [state, setState] = useState<UseDateState>({
    ...generateState(date)
  });

  const setDate = useCallback((date: Date) => {
    if (!isDate(date)) {
      throw new TypeError('setDate -> date is not a Date object');
    }
    setState((state) => ({ ...state, ...generateState(date) }));
  }, []);

  return {
    ...state,
    setDate,
    format
  };
};
