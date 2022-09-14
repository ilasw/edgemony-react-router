import React, { useState } from 'react';
import { TestComponent } from './test-component';

export const TestPage = () => {
  console.log('test page reload');
  return (
    <div>
      <TestComponent />
      <TestComponent />
      <TestComponent />
      <TestComponent />
    </div>
  );
};
