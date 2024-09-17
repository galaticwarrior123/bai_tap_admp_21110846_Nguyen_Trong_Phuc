import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Baitap1MainScreen from './src/screens/baitap1Screen/baitap1MainScreen';
import Baitap1ProfileScreen from './src/screens/baitap1Screen/baitap1ProfileScreen';
import CustomButton from './src/utils/Custom/CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import Register from './src/screens/baitap2Screen/register';
import ConfirmAccount from './src/screens/baitap2Screen/confirmAccount';
import Login from './src/screens/baitap2Screen/login';
import ResetPassword from './src/screens/baitap2Screen/resetPassword';
import ForgotPassword from './src/screens/baitap2Screen/forgotPassword';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Baitap1Profile" component={Baitap1ProfileScreen} />
      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={Root} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ConfirmAccount" component={ConfirmAccount} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
