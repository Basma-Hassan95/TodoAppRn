import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const LogoutScreen = ({ navigation }: any) => {
  const handleLogout = () => {
    
    navigation.replace("Login");
  };

    return (
    <View style={styles.container}>
      <Text style={styles.heading}>Are you sure you want to logout?</Text>
      <TouchableOpacity style={styles.btn} onPress={handleLogout}>
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
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
     fontSize: 20,
      fontWeight: "bold",
       marginBottom: 20 
    },
  btn: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 8,
  },
  btnText: { 
    color: "#fff", 
    fontWeight: "bold"
 },
});