import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export const LoginScreen:React.FC<{ navigation:any}> = ({navigation}) =>{
    
    const [email,setEmail] =useState("");
    const [password,setPassword]=useState("");

    const handleSignIn = () => {
        
        navigation.navigate("Todo");
    };

    return(
    <View style={styles.container}>
        <Text style={styles.title}>Login In</Text>

        <TextInput
        style={styles.input}
        placeholder="Email your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        
        />

        <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        
        />

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Login In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.link}>Don;t have an account? Sign up</Text>
        </TouchableOpacity>
    </View>
);
};

const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent:"center",
        padding:20,
        backgroundColor:"#fff",
    },

    title:{
        fontSize:24,
        fontWeight:"bold",
        marginBottom:30,
        textAlign:"center",
        color:"#333",
    },  
    
    input:{
        borderWidth:1,
        borderColor:"#ccc",
        borderRadius:8,
        padding:12,
        marginBottom:15,
    },

    button:{
        backgroundColor:"#2196F3",
        padding:15,
        borderRadius:8,
        alignItems:"center",
    },

    buttonText:{
        color:"#fff",
        fontSize:16,
        fontWeight:"bold",
    },
   link:{
       color:"#2196F3",
       marginTop:15,
       textAlign:"center",
   }
    
})

