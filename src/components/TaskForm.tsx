import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

interface TaskFormProps {
  onAddTask: (title: string, priority: number) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [errors, setErrors] = useState<{ title?: string; priority?: string }>({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const newErrors: { title?: string; priority?: string } = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
    } else if (title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
    }

    const priorityNum = Number(priority);
    if (!priority) {
      newErrors.priority = 'Priority is required';
    } else if (isNaN(priorityNum) || priorityNum < 1 || priorityNum > 5) {
      newErrors.priority = 'Priority must be a number between 1 and 5';
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  }, [title, priority]);

  const handleAdd = () => {
    if (!isValid) return;

    onAddTask(title.trim(), Number(priority));
    setTitle('');
    setPriority('');
  };

  const renderInputWithIcon = (
    icon: string,
    placeholder: string,
    value: string,
    onChange: (text: string) => void,
    keyboardType: 'default' | 'numeric' = 'default',
    testID?: string,
  ) => (
    <View style={styles.inputContainer}>
      <Text style={styles.icon}>{icon}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChange}
        keyboardType={keyboardType}
        testID={testID}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {renderInputWithIcon('✏️', 'Task Title', title, setTitle, 'default', 'task-title-input')}
      {errors.title && <Text style={styles.error}>{errors.title}</Text>}

      {renderInputWithIcon('⭐', 'Priority (1-5)', priority, setPriority, 'numeric', 'priority-input')}
      {errors.priority && <Text style={styles.error}>{errors.priority}</Text>}

      <Button title="Add Task" onPress={handleAdd} disabled={!isValid} testID="add-task-button" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eef0ff', // light pastel background
    borderRadius: 30,
    paddingHorizontal: 16,
    marginBottom: 8,
    height: 48,
  },
  icon: {
    fontSize: 20,
    color: '#999',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  error: {
    color: 'red',
    marginBottom: 4,
    marginLeft: 16,
  },
});

export default TaskForm;





/*import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

interface TaskFormProps {
  onAddTask: (title: string, priority: number) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [errors, setErrors] = useState<{ title?: string; priority?: string }>({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const newErrors: { title?: string; priority?: string } = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
    } else if (title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
    }

    const priorityNum = Number(priority);
    if (!priority) {
      newErrors.priority = 'Priority is required';
    } else if (isNaN(priorityNum) || priorityNum < 1 || priorityNum > 5) {
      newErrors.priority = 'Priority must be a number between 1 and 5';
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  }, [title, priority]);

  const handleAdd = () => {
    if (!isValid) return;

    onAddTask(title.trim(), Number(priority));
    setTitle('');
    setPriority('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
        testID="task-title-input"
      />
      {errors.title && <Text style={styles.error}>{errors.title}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Priority (1-5)"
        keyboardType="numeric"
        value={priority}
        onChangeText={setPriority}
        testID="priority-input"
      />
      {errors.priority && <Text style={styles.error}>{errors.priority}</Text>}

      <Button title="Add Task" onPress={handleAdd} disabled={!isValid} testID="add-task-button" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 8,
    marginBottom: 4,
    borderRadius: 4,
  },
  error: {
    color: 'red',
    marginBottom: 4,
  },
});

export default TaskForm;*/



/*import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

interface TaskFormProps {
  onAddTask: (title: string, priority: number) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [errors, setErrors] = useState<{ title?: string; priority?: string }>({});
  const [isValid, setIsValid] = useState(false);

  // Validate form whenever title or priority changes
  useEffect(() => {
    const newErrors: { title?: string; priority?: string } = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
    } else if (title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
    }

    const priorityNum = Number(priority);
    if (!priority) {
      newErrors.priority = 'Priority is required';
    } else if (isNaN(priorityNum) || priorityNum < 1 || priorityNum > 5) {
      newErrors.priority = 'Priority must be a number between 1 and 5';
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  }, [title, priority]);

  const handleAdd = () => {
    if (!isValid) return;

    onAddTask(title.trim(), Number(priority));
    setTitle('');
    setPriority('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
      />
      {errors.title && <Text style={styles.error}>{errors.title}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Priority (1-5)"
        keyboardType="numeric"
        value={priority}
        onChangeText={setPriority}
      />
      {errors.priority && <Text style={styles.error}>{errors.priority}</Text>}

      <Button title="Add Task" onPress={handleAdd} disabled={!isValid} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 8,
    marginBottom: 4,
    borderRadius: 4,
  },
  error: {
    color: 'red',
    marginBottom: 4,
  },
});

export default TaskForm;*/




/*import React, { useState } from 'react';
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
});*/
