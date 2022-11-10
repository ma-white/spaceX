import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Detail from '../screens/details';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{headerTitle: 'SpaceX Launches'}}/>
                <Stack.Screen
                    name="Detail"
                    component={Detail}
                    options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStack;