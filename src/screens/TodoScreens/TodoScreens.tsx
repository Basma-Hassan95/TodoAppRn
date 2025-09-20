import React, { useState,useLayoutEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import { TodoItem } from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';



type TodoScreensProps = {
  navigation: any;
  completedTasks: string[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<string[]>>;
};

export const TodoScreens: React.FC<TodoScreensProps> = ({
  navigation,
  completedTasks,
  setCompletedTasks,
}) => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState<string[]>([]);


    const saveTodos = async (todosArray: string[]) => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(todosArray));
    } catch (error) {
      console.log('Error saving todos:', error);
    }
  };

   const handleLogout = async () => {
    try {
      await AsyncStorage.clear(); 
      navigation.replace("Login"); 
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

   useLayoutEffect(() => {
    navigation.setOptions({
      // Left side → Hamburger Menu
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={{ marginLeft: 10 }}
        >
          <Text style={{ fontSize: 24 }}>☰</Text>
        </TouchableOpacity>
      ),

    headerRight: () => (
        <TouchableOpacity onPress={() => alert('Profile Clicked!')}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/e9/3c/e7/e93ce71620845fd40020fb0b109bca47.jpg',
            }}
            style={{ width: 30, height: 30, marginRight: 10, borderRadius: 15 }}
          />
        </TouchableOpacity>
      ),
    });


      const loadTodos = async () => {
    try {
      const savedTodos = await AsyncStorage.getItem('todos');
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      }
    } catch (error) {
      console.log('Error loading todos:', error);
    }
  };

  loadTodos();

}, [navigation]);
  

  

  const addTodo = () => {
  if (task.trim() !== '') {
    const newTodos = [...todos, task];  
    setTodos(newTodos);
    setTask('');
    saveTodos(newTodos);                
  }
};

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  const completeTodo = (index: number) => {
    const todoToComplete = todos[index];
    
    setCompletedTasks([...completedTasks, todoToComplete]);
    
    
   const newTodos = todos.filter((_, i) => i !== index);
  setTodos(newTodos);
  saveTodos(newTodos); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Todo App</Text>

      {/* Input Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task..."
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addBtn} onPress={addTodo}>
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>

      console.log("All Tasks:", tasks);
console.log("Completed Tasks:", completedTasks);


      {/* Todo List */}
      <FlatList
        data={todos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.todoRow}>
            <TodoItem title={item} onDelete={() => deleteTodo(index)} />
            <TouchableOpacity
              style={styles.completeBtn}
              onPress={() => completeTodo(index)}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                Complete
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Go to Completed Tasks Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#2196F3',
          padding: 10,
          borderRadius: 8,
          alignItems: 'center',
          marginTop: 20,
        }}
        onPress={() => navigation.navigate('Completed', {completedTasks})}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Go to Completed Tasks
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  addBtn: {
    backgroundColor: '#4CAF50',
    marginLeft: 10,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  addText: {
    color: 'white',
    fontWeight: 'bold',
  },
  todoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  completeBtn: {
    backgroundColor: '#f39c12',
    marginLeft: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
