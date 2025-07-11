import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import { useTasks } from '../context/TaskContext';

const HomeScreen = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Task Manager</Text>
      </View>

      <View style={styles.body}>
        <TaskForm onAddTask={addTask} />
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem task={item} onToggle={toggleTask} onDelete={deleteTask} />
          )}
          ListEmptyComponent={<Text style={styles.emptyText}>No tasks added yet!</Text>}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#4B6CB7', // nice blue-purple
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  body: {
    flex: 2,
    backgroundColor: '#F5F7FF', // very light lavender
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 40,
    fontSize: 16,
  },
});

export default HomeScreen;






/*import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import { useTasks } from '../context/TaskContext';

const HomeScreen = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();

  return (
    <View style={styles.container}>
      <TaskForm onAddTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={toggleTask} onDelete={deleteTask} />
        )}
        ListEmptyComponent={<Text>No tasks added yet!</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 30,
  },
});

export default HomeScreen;*/



/*import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import { useTasks } from '../context/TaskContext';

const HomeScreen = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();

  return (
    <View style={styles.container}>
      <TaskForm onAddTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={toggleTask} onDelete={deleteTask} />
        )}
        ListEmptyComponent={<Text>No tasks added yet!</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 30,
  },
});

export default HomeScreen;*/



/*import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import uuid from 'react-native-uuid';
import { Task } from '../types/Task';

const HomeScreen = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, priority: number) => {
    const newTask: Task = {
      id: uuid.v4().toString(),
      title,
      priority,
      completed: false,
    };
    // Add and sort by priority descending
    const updatedTasks = [newTask, ...tasks].sort((a, b) => b.priority - a.priority);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <TaskForm onAddTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
        ListEmptyComponent={<Text>No tasks added yet!</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 30,
  },
});

export default HomeScreen;*/



/*import React from 'react';
import { View, FlatList, Text } from 'react-native';
import TaskItem from '../components/TaskItem';
import { useTasks } from '../context/TaskContext'; // If using context

const HomeScreen = () => {
  const { tasks } = useTasks();  // Or get tasks from your state

  // Step 1: Sort tasks by priority descending
  const sortedTasks = tasks.slice().sort((a, b) => b.priority - a.priority);

  return (
    <View>
      <FlatList
        data={sortedTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
        ListEmptyComponent={<Text>No tasks added yet!</Text>}
      />
    </View>
  );
};

export default HomeScreen;*/



/*import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import { Task } from '../types/Task';
import uuid from 'react-native-uuid';

const HomeScreen = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, priority: number) => {
    const newTask: Task = {
      id: uuid.v4().toString(),
      title,
      priority,
      completed: false,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  return (
    <View style={styles.container}>
      <TaskForm onAddTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
        ListEmptyComponent={<Text>No tasks yet. Add some!</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});

export default HomeScreen;*/



/*import React, { useState } from 'react';
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
});*/
