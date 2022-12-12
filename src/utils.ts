export type DateFormat = |
  'dd/mm/yyyy' |
  'dd.mm.yyyy' |
  'mm/dd/yyyy' |
  'mm.dd.yyyy' |
  'yyyy/mm/dd' |
  'yyyy.mm.dd' |
  'yyyy/dd/mm' |
  'yyyy.dd.mm'

export const toDayString = (date: Date) => date.getDate().toString().padStart(2, '0');
export const toMonthString = (date: Date) => String(date.getMonth() + 1).padStart(2, '0');
export const toYearString = (date: Date) => String(date.getFullYear());

export const isDate = (date: unknown) => {
  return Object.prototype.toString.call(date) === '[object Date]';
};

export const format = (date: Date, format: DateFormat): string => {
  if (!isDate(date)) {
    throw new TypeError('format -> date is not a Date object');
  }
  let result = '';
  const dateString = toDayString(date);
  const monthString = toMonthString(date);
  const yearString = toYearString(date);

  const dates = {
    'dmy': [dateString, monthString, yearString],
    'mdy': [monthString, dateString, yearString],
    'ymd': [yearString, monthString, dateString],
    'ydm': [yearString, dateString, monthString],
  };

  switch (format) {
    case 'dd/mm/yyyy': {
      result = dates.dmy.join('/');
      break;
    }
    case 'dd.mm.yyyy': {
      result = dates.dmy.join('.');
      break;
    }
    case 'mm/dd/yyyy': {
      result = dates.mdy.join('/');
      break;
    }
    case 'mm.dd.yyyy': {
      result = dates.mdy.join('.');
      break;
    }
    case 'yyyy/mm/dd': {
      result = dates.ymd.join('/');
      break;
    }
    case 'yyyy.mm.dd': {
      result = dates.ymd.join('.');
      break;
    }
    case 'yyyy/dd/mm': {
      result = dates.ydm.join('/');
      break;
    }
    case 'yyyy.dd.mm': {
      result = dates.ydm.join('.');
      break;
    }
    default: {
      throw new Error('format -> Invalid format');
    }
  }
  return result;
};
