import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScrin from './src/HomeScrin';
import { NavigationContainer } from '@react-navigation/native';
import Component1 from './src/components/Component1';
import Component2 from './src/components/Component2';
import Skcrin1 from './src/skcrin/Skcrin1';
import { NativeBaseConfigProvider } from 'native-base';

export default function App() {
  const stack = createStackNavigator();
  return (

    <NavigationContainer>

      <stack.Navigator>
        <stack.Screen name="Home" component={HomeScrin} options={{ headerShown: false }} />
        <stack.Screen name="Component1" component={Component1} />
        <stack.Screen name="Component2" component={Component2} />
        <stack.Screen name="Skcrin1" component={Skcrin1} />
      </stack.Navigator>

    </NavigationContainer>


  );
}
