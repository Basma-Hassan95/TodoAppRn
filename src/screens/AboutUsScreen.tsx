import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Us</Text>
      <Text style={styles.text}>
      This is a simple Todo App built with React Native.
        You can add, delete, and complete tasks. 
        Completed tasks are stored and accessible later.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
},
  heading: { 
    fontSize: 24, 
    fontWeight: "bold",
     marginBottom: 10
     },
  text: {
     fontSize: 16,
      textAlign: "center", 
      paddingHorizontal: 20
     },
});