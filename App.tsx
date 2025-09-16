import React from 'react'
import { SafeAreaView } from 'react-native';
import { TodoScreens } from './src';
import { Completed } from './src';
import AppNavigator from './src/navigation/AppNavigator';



export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
       <TodoScreens /> 
       <Completed />
       <AppNavigator />
       </SafeAreaView>
  );
}