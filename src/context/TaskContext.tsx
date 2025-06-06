import React, { createContext, useContext, useState } from 'react';
import { Task } from '../types/Task';
import uuid from 'react-native-uuid';

interface TaskContextType {
  tasks: Task[];
  addTask: (title: string, priority: number) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, priority: number) => {
    const newTask: Task = {
      id: uuid.v4().toString(),
      title,
      priority,
      completed: false,
    };
    const sortedTasks = [newTask, ...tasks].sort((a, b) => b.priority - a.priority);
    setTasks(sortedTasks);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks must be used within a TaskProvider');
  return context;
};


/*import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Task } from '../types/Task';

interface TaskContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};*/
