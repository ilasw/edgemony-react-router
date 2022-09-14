import React, { useContext } from 'react';
import { useCounter } from './use-counter';

export const TestComponent = () => {
  const { counter, setCounter } = useCounter();
  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={() => setCounter((s) => s + 1)}>incrementa</button>
    </div>
  );
};
