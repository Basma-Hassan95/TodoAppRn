import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';    
import { NavigationContainer } from '@react-navigation/native';
import   {TodoScreens}  from '../screens/TodoScreens';
import { Completed } from '../screens/CompletedScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Todo'>
                 <Stack.Screen name='Todo' component={TodoScreens} />
                 <Stack.Screen name='Completed' component={Completed} />
                 

            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default AppNavigator;