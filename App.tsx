import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Baitap1MainScreen from './src/screens/baitap1Screen/baitap1MainScreen';
import Baitap1ProfileScreen from './src/screens/baitap1Screen/baitap1ProfileScreen';
import CustomButton from './src/utils/Custom/CustomButton';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Register from './src/screens/baitap2Screen/register';
import ConfirmAccount from './src/screens/baitap2Screen/confirmAccount';
import Login from './src/screens/baitap2Screen/login';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Baitap1" component={Baitap1ProfileScreen} />
        <Stack.Screen name="HomePage" component={Baitap1MainScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ConfirmAccount" component={ConfirmAccount} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}




