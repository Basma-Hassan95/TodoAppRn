import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { TodoItem } from '../../components';

export const TodoScreens: React.FC<{ navigation:any}> = ({ navigation}) =>{

    const [task, setTask] = useState ('');
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = () => {

        if(task.trim() !== ''){
            setTodos([...todos, task]);
            setTask('');
        }
    };

    const deleteTodo = (index: number) => {
       
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

return(
    <View style={styles.container} >
        <Text style={styles.heading}>My Todo App</Text>

        {/* Input Field */}

        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder='Enter a task...'
            value={task}
            onChangeText={setTask}
            />
        
        <TouchableOpacity style={styles.addBtn} onPress={addTodo}>
            <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>

            
        </View>

        {/* Todo List */}

        <FlatList 
        data = {todos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => (
            <TodoItem title={item} onDelete={() => deleteTodo(index)} />
        )}
        />

        <TouchableOpacity style={{ backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20}}
  onPress={() => navigation.navigate('Completed')}
>
  <Text style={{ color: 'white', fontWeight: 'bold' }}>Go to Completed Tasks</Text>
</TouchableOpacity>

    </View>
);

}

const styles = StyleSheet.create({
   container:{
    flex:1,
    padding:20,
    backgroundColor:'#fff',
   },
   heading:{

    fontSize:24,
    fontWeight:'bold',
    marginVertical:15,
    textAlign:'center',
    color: '#333'

   },
   inputContainer:{

    flexDirection:'row',
    marginBottom:15
   },
   input:{
    flex:1,
    borderWidth:1,
    borderColor: '#ccc',
    borderRadius:8,
    paddingHorizontal:10,
   },
   addBtn:{

    backgroundColor:'#4CAF50',
    marginLeft:10,
    borderRadius:8,
    justifyContent:'center',
    paddingHorizontal:15,

   },
   addText:{
    color:'white',
    fontWeight:'bold',
   }



});