import { useState, useCallback } from "react";

export const useQueue = <T,>(initialValue: T[] = []) => {
  const [queue, setQueue] = useState<T[]>(initialValue);
  const add = useCallback((item: T) => {
    setQueue((prev) => [...prev, item]);
  }, []);

  const remove = useCallback(() => {
    setQueue((prev) => prev.slice(1));
  }, []);

  const first = queue[0];
  const last = queue[queue.length - 1];
  const size = queue.length;

  return {
    add,
    remove,
    first,
    last,
    size,
    queue, // اختیاری، ولی برای دیباگ یا رندر کامل صف مفیده
  };
};
