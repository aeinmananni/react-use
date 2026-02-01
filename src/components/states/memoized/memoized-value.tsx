import { createMemo } from 'react-use';

const fibonachi = (n: number): number => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonachi(n - 1) + fibonachi(n - 2);
};

const useMemoFibonachi = createMemo(fibonachi);
export default function MemoizedValue() {
  const result = useMemoFibonachi(10);
  return (
    <div>
      <h1>fibo(10) : result {result}</h1>
    </div>
  );
}
