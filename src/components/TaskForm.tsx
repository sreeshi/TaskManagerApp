import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface Props {
  onAddTask: (title: string) => void;
}

const TaskForm: React.FC<Props> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (title.trim()) {
      onAddTask(title);
      setTitle('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter task..."
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
};

export default TaskForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
    borderRadius: 5,
  },
});
