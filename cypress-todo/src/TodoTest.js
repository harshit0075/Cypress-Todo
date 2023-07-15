import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';

describe('Todos App', () => {
  test('User should visit the page', () => {
    render(<Todo />);
    
    const pageTitle = screen.getByText('Todos App');
    expect(pageTitle).toBeInTheDocument();
  });

  test('The input form should be auto-focused', () => {
    render(<Todo />);
    
    const inputElement = screen.getByPlaceholderText('Enter your todo');
    expect(document.activeElement).toBe(inputElement);
  });

  test('Select the input element using a class', () => {
    render(<Todo />);
    
    const inputElement = screen.getByTestId('todo-input');
    expect(inputElement).toBeInTheDocument();
  });

  test('Type into the element and check the value', () => {
    render(<Todo />);
    
    const inputElement = screen.getByTestId('todo-input');
    const typedValue = 'Buy groceries';

    fireEvent.change(inputElement, { target: { value: typedValue } });
    expect(inputElement.value).toBe(typedValue);
  });
});
