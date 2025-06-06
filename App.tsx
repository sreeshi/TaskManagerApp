import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { TaskProvider } from './src/context/TaskContext';

export default function App() {
  return (
    <TaskProvider>
      <SafeAreaView style={styles.container}>
        <HomeScreen />
      </SafeAreaView>
    </TaskProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});



/*import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { TaskProvider } from './src/context/TaskContext';

export default function App() {
  return (
    <TaskProvider>
      <HomeScreen />
    </TaskProvider>
  );
}*/



/*import React from 'react';
import { View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { TaskProvider } from './src/context/TaskContext';

export default function App() {
  return (
    <TaskProvider>
      <HomeScreen />
    </TaskProvider>
  );
}*/



/*import React from 'react';
import { View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { TaskProvider } from './src/context/TaskContext';

export default function App() {
  return (
    <TaskProvider>
      <HomeScreen />
    </TaskProvider>
  );
}*/



/*import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});*/




/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
