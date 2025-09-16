import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";


export const Completed = () => {
const completedTodos = [
    {id: "1", title: "Learn React Native"},
    {id:"2", title:"Build a ToDo App"},
];
return(
    <View style={styles.container}>
        <Text style={styles.heading}>Completed Tasks </Text>
        <FlatList
        data ={completedTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <Text style={styles.todoItem}>{item.title}</Text>
        )}
        />
    </View>
);

};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    heading: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
        color: "#333",
    },
    todoItem: {
        fontSize: 16,
        padding: 10,
        backgroundColor: "#f2f2f2",
        borderRadius:8,
        marginVertical:5,
        color: "#333",
    },
});
