import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

type CompletedProps = {
  navigation: any;
  route: any; 
};

export const Completed: React.FC<CompletedProps> = ({ navigation, route }) => {
  const completedTasks: string[] = route.params?.completedTasks || [];

  console.log("Received Completed Tasks:", completedTasks);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Completed Tasks</Text>

      <FlatList
        data={completedTasks}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.todoItem}>{item}</Text>
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
    borderRadius: 8,
    marginVertical: 5,
    color: "#333",
  },
});
