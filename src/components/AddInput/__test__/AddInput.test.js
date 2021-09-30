import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn();

describe('AddInput', () => {
  it('should render input element', async () => {
    render(<AddInput todos={[]} todo={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should be able to type into the input filed', async () => {
    render(<AddInput todos={[]} todo={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    fireEvent.change(inputElement, {
      target: { value: 'Go Grocery Shopping' },
    });
    expect(inputElement.value).toBe('Go Grocery Shopping');
  });

  it('should have empty input when add button is clicked', async () => {
    render(<AddInput todos={[]} todo={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    const buttonElement = screen.getByRole('button', { name: /Add/i });
    fireEvent.change(inputElement, {
      target: { value: 'Go Grocery Shopping' },
    });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe('');
  });
});
