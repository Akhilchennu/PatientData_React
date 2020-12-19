import { render } from '@testing-library/react';
import App from '../App';
import React from 'react';


test('renders App component', () => {
  const root=document.createElement('div');
  render(<App />,root)
});
