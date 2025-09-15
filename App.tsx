import React, { useState, useEffect, useCallback } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Alert,
  LayoutAnimation,
  UIManager,
  StyleSheet,
} from 'react-native';
import { Task } from './src/types';
import TaskItem from './src/components/TaskItem';
import { loadTasks, saveTasks } from './src/storage';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  useEffect(() => {
    const fetchData = async () => {
      const saved = await loadTasks();
      if (saved) setTasks(saved);
    };
    fetchData();
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = useCallback(() => {
    if (!text.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      title: text.trim(),
      completed: false,
    };
    LayoutAnimation.easeInEaseOut();
    setTasks((prev) => [newTask, ...prev]);
    setText('');
  }, [text]);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const editTask = (id: string, newTitle: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, title: newTitle } : t))
    );
  };

  const deleteTask = (id: string) => {
    Alert.alert('Delete Task', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          LayoutAnimation.easeInEaseOut();
          setTasks((prev) => prev.filter((t) => t.id !== id));
        },
      },
    ]);
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <Text style={styles.heading}>My ToDo App</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Enter task..."
            value={text}
            onChangeText={setText}
          />
          <Button title="Add" onPress={addTask} />
        </View>

        <View style={styles.filterRow}>
          <Button title="All" onPress={() => setFilter('all')} />
          <Button title="Active" onPress={() => setFilter('active')} />
          <Button title="Completed" onPress={() => setFilter('completed')} />
        </View>

        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onToggle={toggleTask}
              onEdit={editTask}
              onDelete={deleteTask}
            />
          )}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  inputRow: { flexDirection: 'row', marginBottom: 12 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 8,
    marginRight: 8,
    borderRadius: 4,
  },
  filterRow:
