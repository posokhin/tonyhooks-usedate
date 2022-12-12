import { act, renderHook } from '@testing-library/react-hooks';
import { useDate } from '../src';
import { expect, test, describe } from '@jest/globals';

describe('check day, month, year', () => {
  test('should return 01', () => {
    const date = new Date(2022, 1, 1);
    const { result } = renderHook(() => useDate(date));
    expect(result.current.day).toBe('01');
  });

  test('should return 11', () => {
    const date = new Date(2022, 1, 11);
    const { result } = renderHook(() => useDate(date));
    expect(result.current.day).toBe('11');
  });

  test('should return 02', () => {
    const date = new Date(2022, 1, 11);
    const { result } = renderHook(() => useDate(date));
    expect(result.current.month).toBe('02');
  });

  test('should return 03', () => {
    const date = new Date(2022, 2, 11);
    const { result } = renderHook(() => useDate(date));
    expect(result.current.month).toBe('03');
  });

  test('should return 2022', () => {
    const date = new Date(2022, 2, 11);
    const { result } = renderHook(() => useDate(date));
    expect(result.current.year).toBe('2022');
  });

  test('should return current day', () => {
    const day = new Date().getDate();
    const { result } = renderHook(() => useDate());
    expect(result.current.day).toBe(day + '');
  });

  test('should return current month', () => {
    const month = new Date().getMonth();
    const { result } = renderHook(() => useDate());
    expect(result.current.month).toBe(month + 1 + '');
  });

  test('should return current year', () => {
    const year = new Date().getFullYear();
    const { result } = renderHook(() => useDate());
    expect(result.current.year).toBe(year + '');
  });
});

describe('test setDate', () => {
  test('should return dateToUpdate after setDate', () => {
    const date = new Date(2022, 2, 2);
    const dateToUpdate = new Date(2023, 3, 3);
    const { result } = renderHook(() => useDate(date));
    expect(result.current.date).toBe(date);
    act(() => {
      result.current.setDate(dateToUpdate);
    });
    expect(result.current.date).toBe(dateToUpdate);
  });

  test('should return originalDate after setDate', () => {
    const date = new Date(2022, 2, 2);
    const dateToUpdate = new Date(2023, 3, 3);
    const { result } = renderHook(() => useDate(date));
    expect(result.current.originalDate).toBe(date);
    act(() => {
      result.current.setDate(dateToUpdate);
    });
    expect(result.current.originalDate).toBe(date);
  });
});

describe('format', () => {
  test('should return 11.11.2022', () => {
    const date = new Date(2022, 10, 11);
    const { result } = renderHook(() => useDate());
    expect(result.current.format(date, 'dd.mm.yyyy')).toBe('11.11.2022');
  });

  test('should return 03.11.2022', () => {
    const date = new Date(2022, 2, 11);
    const { result } = renderHook(() => useDate());
    expect(result.current.format(date, 'mm.dd.yyyy')).toBe('03.11.2022');
  });

  test('should return 2022/03/15', () => {
    const date = new Date(2022, 2, 15);
    const { result } = renderHook(() => useDate());
    expect(result.current.format(date, 'yyyy/mm/dd')).toBe('2022/03/15');
  });
});

describe('test number for new Date()', () => {
  test('should return 2022-12-11T01:10:22.881Z', () => {
    const date = new Date(1670721022881);
    const { result } = renderHook(() => useDate(date));
    expect(result.current.date instanceof Date).toBe(true);
    expect(result.current.date.toISOString()).toBe('2022-12-11T01:10:22.881Z');
  });
});
