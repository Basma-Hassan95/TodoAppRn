import React, { useState } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';    
import { NavigationContainer } from '@react-navigation/native';
import   {TodoScreens}  from '../screens/TodoScreens';
import { Completed } from '../screens/CompletedScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { AboutUs } from '../screens/AboutUsScreen';
import { LogoutScreen } from '../screens/LogOutScreen';


const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();


const TodoDrawer = ({completedTasks, setCompletedTasks}: any) => {

  return(
    <Drawer.Navigator initialRouteName="TodoMain">
      <Drawer.Screen name="TodoMain">
        {(props) =>(
          <TodoScreens
          {...props}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
          />
        )}
      </Drawer.Screen>

      <Drawer.Screen name="Completed">
        {(props) => (
          <Completed {...props} completedTasks={completedTasks} />
        )}
        </Drawer.Screen>
         
      
      <Drawer.Screen name="About Us" component={AboutUs} />

      
      <Drawer.Screen name="Logout" component={LogoutScreen} />

    </Drawer.Navigator>
  )
  
}



const AppNavigator = () => {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
    return(
       <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name ="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Todo" >
        {(props) =>(
          <TodoDrawer
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