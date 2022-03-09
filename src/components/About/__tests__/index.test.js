import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
  const { asFragment } = render(<About />);

  it('renders', () => {
    render(<About />);
  })

  it('matches snapshot DOM node structure', () => {
    expect(asFragment()).toMatchSnapshot();
  })
})