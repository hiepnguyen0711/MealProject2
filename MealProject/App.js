import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealScreen from './screens/MealScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      drawerActiveBackgroundColor: '#f0e1ff',
      drawerActiveTintColor: '#3c0a6b',
      drawerInactiveTintColor: 'white',
      drawerStyle: { backgroundColor: '#45310c' },
      headerStyle: { backgroundColor: '#45310c' },
      headerTintColor: 'white'
    }} >
      <Drawer.Screen name='category' component={CategoryScreen} options={{
        drawerLabel: 'Menu',
        drawerIcon: ({ color, size }) => (
          <Ionicons name="fast-food" color={color} size={size} />
        ),
        title: 'Menu',
      }} />
      <Drawer.Screen name='favorite' component={FavoriteScreen} options={{
        drawerLabel: 'Favorites List',
        drawerIcon: ({ color, size }) => (
          <Ionicons name="star" color={color} size={size} />
        ),
        title: 'Favorites List'
      }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [fontLoaded] = useFonts({
    'pacifico': require('./assets/fonts/Pacifico-Regular.ttf')
  })
  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store} >
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#45310c' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#45310c' }
          }} >
            <Stack.Screen name='drawer' component={DrawerNavigator} options={{
              headerShown: false
            }} />
            <Stack.Screen name='meals' component={MealScreen} options={{
            
            }} />
            <Stack.Screen name='detail' component={MealDetailScreen} />

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
