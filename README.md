## useDate

### React hook for simple interaction with dates
### zero dependencies

### Installation

```
npm i @tonyhooks/usedate
```

### Usage

```jsx
import { useDate } from '@tonyhooks/usedate';

function App() {
  const {
    originalDate,
    date,
    day,
    month,
    year,
    format,
    setDate
  } = useDate(new Date(2022, 11, 13));
  
  return (
    <>
      <div>{originalDate}</div> // -> always Tue Dec 13 2022
      <div>{date}</div> // -> Tue Dec 13 2022
      <div>{day}/{month}/{year}</div> // -> 13/12/2022
      <button onClick={() => setDate(new Date(2022, 11, 14))}>Change Date</button>
      <div>{date}</div> // -> after setDate - Wed Dec 14 2022
      <div>{format(date, 'dd.mm.yyyy')}</div> // -> 14.12.2022
    </>
  );
}
```

You can also use the format function without calling useDate
```jsx
import { format } from '@tonyhooks/usedate';

function App() {
  
  return (
    <div>{format(new Date(2022, 11, 13), 'dd/mm/yyyy')}</div> // -> 13/12/2022
  );
}
```

### API

#### Fields returned by useDate
| name         | type     | example                                      | Description                                                                        |
|--------------|----------|----------------------------------------------|------------------------------------------------------------------------------------|
| originalDate | Date     | Tue Dec 13 2022                              | immutable field - always contains the date passed to useDate                       |
| setDate      | Function | setDate(new Date(2022, 11, 13))              | the function takes a Date object                                                   |
| date         | Date     | Tue Dec 13 2022                              | mutable field by calling the setState function, used to calculate day, month, year |
| day          | String   | 13                                           | day                                                                                |
| month        | String   | 12                                           | month                                                                              |
| year         | String   | 2022                                         | year                                                                               |
| format       | Function | format(new Date(2022, 11, 13), 'dd.mm.yyyy') | The function accepts a date in the format of a Date object and a format type       |


### Types

```typescript
export type DateFormat = |
  'dd/mm/yyyy' |
  'dd.mm.yyyy' |
  'mm/dd/yyyy' |
  'mm.dd.yyyy' |
  'yyyy/mm/dd' |
  'yyyy.mm.dd' |
  'yyyy/dd/mm' |
  'yyyy.dd.mm'

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
```

### Thanks for using this hook

#### if you need my help you can write to me at posohin7@gmail.com. You can also open bugs.
