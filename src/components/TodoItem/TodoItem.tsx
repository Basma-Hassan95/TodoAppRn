 import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TodoItemProps {
    title : string;
    onDelete: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({title, onDelete}) => {
    return (
        
        <View style ={styles.container}>
            <Text style ={styles.text} >{title}</Text>
            <TouchableOpacity style={styles.deleteBtn} onPress={onDelete} >
                <Text style ={styles.deleteText} >X</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
        marginVertical: 5,
        padding: 15,
        borderRadius:10,
        justifyContent:'space-between',
        alignItems:'center',
        elevation:2,

    },
    text:{
        fontSize:18,
        fontWeight: 500,

    },
    deleteBtn:{
        backgroundColor:'#ff4d4d',
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:5,

    },
    deleteText:{

        color:'white',
        fontWeight:'bold',
    }
})
