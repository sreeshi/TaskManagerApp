import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Task } from '../types/Task';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import uuid from 'react-native-uuid';
//import { v4 as uuidv4 } from 'uuid';

const HomeScreen: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      //id: uuidv4(),
      id: uuid.v4().toString(),
      title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <TaskForm onAddTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onDelete={deleteTask} onToggle={toggleTask} />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
