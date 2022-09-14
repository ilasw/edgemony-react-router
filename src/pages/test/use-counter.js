import React, { useContext } from 'react';
import { CounterContext } from '../../App.js';

export const useCounter = () => {
  const { state, setState } = useContext(CounterContext);
  return { counter: state, setCounter: setState };
};
