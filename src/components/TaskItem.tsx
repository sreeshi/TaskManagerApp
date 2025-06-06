import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.priority}>Priority: {task.priority}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priority: {
    fontSize: 14,
    color: '#555',
  },
});

export default TaskItem;



/*import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Task } from '../types/Task';

interface Props {
  task: Task;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

const TaskItem: React.FC<Props> = ({ task, onDelete, onToggle }) => {
  return (
    <View style={styles.item}>
      <Text
        onPress={() => onToggle(task.id)}
        style={[
          styles.title,
          { textDecorationLine: task.completed ? 'line-through' : 'none' },
        ]}
      >
        {task.title}
      </Text>
      <Button title="Delete" onPress={() => onDelete(task.id)} />
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    flex: 1,
  },
});*/
