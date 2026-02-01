import { useState, useCallback } from 'react';
/**
 *
 * @param defaultValue استفاده میشه fallbak مقداری که به صورت
 * @param initailValue مقداری که استیت در شروع باهاش ست میشه
 *
 */

export const useDefault = <T,>(
  defaultValue: T,
  initailValue: T | null
): [T, (val: T | null) => void] => {
  const [state, setState] = useState<T>(initailValue ?? defaultValue);

  const setSafeState = useCallback(
    (val: T | null) => {
      if (val === null || val === undefined) {
        setState(defaultValue);
      } else {
        setState(val);
      }
    },
    [defaultValue]
  );

  return [state ?? defaultValue, setSafeState];
};

/**
 *  useState → برای مدیریت استیت داخلی.

useCallback → برای جلوگیری از ساخت دوباره تابع setSafeState تو هر رندر (بهینه‌سازی).

بررسی null و undefined → چون معمولاً این دوتا مشکل‌ساز میشن (نه خالی رشته "" یا عدد 0).

state ?? defaultValue → مطمئن میشیم همیشه خروجی یه مقدار مطمئن داره.
 * 
 */
