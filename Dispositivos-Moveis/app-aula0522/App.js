import { NavigationContainer } from '@react-navigation/native'; //é o primeiro container
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //é o que permiti a nav entre paginas
import Login from './src/pages/login';
import Home from './src/pages/home';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='home' component={Home} options={{headerLeft: null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

