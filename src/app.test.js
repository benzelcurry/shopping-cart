import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Store from './components/Store';
import Cart from './components/Cart';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Store component', () => {
  it('renders the navbar', () => {
    render(
      <Router>
        <Store />
      </Router>
    );
    expect(screen.getByText('Storedew Valley')).toBeInTheDocument();
  });
});