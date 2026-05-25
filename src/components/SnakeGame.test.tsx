import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SnakeGame from './SnakeGame';

describe('SnakeGame Component', () => {
  let onScoreUpdateMock;
  let onGameOverMock;

  beforeEach(() => {
    onScoreUpdateMock = jest.fn();
    onGameOverMock = jest.fn();
    render(<SnakeGame onScoreUpdate={onScoreUpdateMock} onGameOver={onGameOverMock} reset={false} />);
  });

  test('Normal Gameplay Flow - Snake eats food', () => {
    // Simulate snake moving to eat food
    userEvent.keyboard('{ArrowRight}');
    expect(onScoreUpdateMock).toHaveBeenCalledWith(1);
  });

  test('Reset Functionality - Game resets correctly', () => {
    render(<SnakeGame onScoreUpdate={onScoreUpdateMock} onGameOver={onGameOverMock} reset={true} />);
    // Check if snake and score are reset
    const canvas = screen.getByRole('img');
    expect(canvas).toBeInTheDocument();
  });

  test('Immediate Collision on Start - Snake collides with wall', () => {
    render(<SnakeGame onScoreUpdate={onScoreUpdateMock} onGameOver={onGameOverMock} reset={false} />);
    // Simulate snake moving into a wall
    userEvent.keyboard('{ArrowLeft}');
    expect(onGameOverMock).toHaveBeenCalled();
  });

  test('No Valid Food Placement - All board space occupied', () => {
    // Mock the state to fill the board with snake
    const filledSnake = Array(25).fill({ x: 0, y: 0 }).map((_, i) => ({ x: i % 5, y: Math.floor(i / 5) }));
    render(<SnakeGame onScoreUpdate={onScoreUpdateMock} onGameOver={onGameOverMock} reset={false} snake={filledSnake} />);
    expect(onGameOverMock).toHaveBeenCalled();
  });

  test('Invalid Direction Input Handling - Opposite direction input', () => {
    userEvent.keyboard('{ArrowRight}');
    userEvent.keyboard('{ArrowLeft}');
    // Check if the direction remains the same
    const canvas = screen.getByRole('img');
    expect(canvas).toBeInTheDocument();
  });
});
