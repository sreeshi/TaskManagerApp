import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TaskForm from '../src/components/TaskForm';

describe('TaskForm', () => {
  it('should show validation error if title is too short', () => {
    const onAddTask = jest.fn();
    const { getByPlaceholderText, getByText } = render(<TaskForm onAddTask={onAddTask} />);

    fireEvent.changeText(getByPlaceholderText('Task Title'), 'Hi');
    fireEvent.changeText(getByPlaceholderText('Priority (1-5)'), '3');
    fireEvent.press(getByText('Add Task'));

    expect(getByText('Title must be at least 3 characters')).toBeTruthy();
    expect(onAddTask).not.toHaveBeenCalled();
  });

  it('should call onAddTask when valid input is given', () => {
    const onAddTask = jest.fn();
    const { getByPlaceholderText, getByText } = render(<TaskForm onAddTask={onAddTask} />);

    fireEvent.changeText(getByPlaceholderText('Task Title'), 'Buy milk');
    fireEvent.changeText(getByPlaceholderText('Priority (1-5)'), '2');
    fireEvent.press(getByText('Add Task'));

    expect(onAddTask).toHaveBeenCalledWith('Buy milk', 2);
  });
});
