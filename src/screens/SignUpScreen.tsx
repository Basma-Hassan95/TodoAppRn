import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export const SignUpScreen: React.FC<{ navigation: any}> = ({ navigation}) => {
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () =>{
        navigation.navigate("Login");
    }

    return(

        <View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>

            
            <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={(text) => setName(text)}

            />

            <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            value={email}
            onChangeText={(text) => setEmail(text)}

            />

            <TextInput
            style={styles.input}
            placeholder="Enter Your Password"   
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry

            />

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Login")} >
                <Text style={styles.link}>Already have an account? Login In</Text>
            </TouchableOpacity>
        </View>
    )
    
}

const styles = StyleSheet.create({

     container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "#2196F3",
    marginTop: 15,
    textAlign: "center",
  },
});