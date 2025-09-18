import React, { useState } from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';    
import { NavigationContainer } from '@react-navigation/native';
import   {TodoScreens}  from '../screens/TodoScreens';
import { Completed } from '../screens/CompletedScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { SignUpScreen } from '../screens/SignUpScreen';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
    return(
       <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name ="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Todo" >
        {(props) =>(
          <TodoScreens
          {...props}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
          />
        )}
        </Stack.Screen>
        <Stack.Screen name="Completed">
          {(props) =>(<Completed {...props} completedTasks={completedTasks} />)}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    )
}


export default AppNavigator;