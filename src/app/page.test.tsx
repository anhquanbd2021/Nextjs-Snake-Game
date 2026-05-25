import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './page';

describe('Home Component', () => {
  test('Normal Gameplay Flow - Score increments on food consumption', async () => {
    render(<Home />);
    // Simulate snake moving to eat food
    userEvent.keyboard('{ArrowRight}');
    const scoreElement = await screen.findByText(/Score: 1/i);
    expect(scoreElement).toBeInTheDocument();
  });

  test('Reset Functionality - Game resets correctly', async () => {
    render(<Home />);
    // Trigger game over and reset
    userEvent.keyboard('{ArrowLeft}'); // Assuming this causes a collision
    const resetButton = await screen.findByRole('button', { name: /play again/i });
    userEvent.click(resetButton);
    const scoreElement = await screen.findByText(/Score: 0/i);
    expect(scoreElement).toBeInTheDocument();
  });

  test('Game Over Condition - Snake collides with wall', async () => {
    render(<Home />);
    // Simulate snake moving into a wall
    userEvent.keyboard('{ArrowLeft}');
    const gameOverElement = await screen.findByText(/game over/i, { selector: 'canvas' });
    expect(gameOverElement).toBeInTheDocument();
  });

  test('Score Update Handling - Multiple food pickups in quick succession', async () => {
    render(<Home />);
    // Simulate snake moving to eat multiple foods
    userEvent.keyboard('{ArrowRight}');
    userEvent.keyboard('{ArrowRight}');
    const scoreElement = await screen.findByText(/Score: 2/i);
    expect(scoreElement).toBeInTheDocument();
  });

  test('Invalid Direction Input Handling - Opposite direction input', async () => {
    render(<Home />);
    // Simulate opposite direction input
    userEvent.keyboard('{ArrowRight}');
    userEvent.keyboard('{ArrowLeft}');
    const scoreElement = await screen.findByText(/Score: 0/i);
    expect(scoreElement).toBeInTheDocument();
  });
});
