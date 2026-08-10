// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AutoWorker title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AutoWorker/i);
    expect(titleElement).toBeInTheDocument();
});
