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


const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// function DrawerNavigator(){
//     return(
//       <Drawer.Navigator>
//           <Drawer.Screen name='category' component={CategoryScreen} />
//           <Drawer.Screen name='favorite' component={FavoriteScreen} />
//       </Drawer.Navigator>
//     );
// }

export default function App() {
  const [fontLoaded] = useFonts({
    'pacifico': require('./assets/fonts/Pacifico-Regular.ttf')
  })
// if(!fontLoaded){
//   return <AppLoading />;
// }
  return (
    <>
    <StatusBar style="light" />
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{ backgroundColor: '#45310c' },
          headerTintColor: 'white',
          contentStyle:{ backgroundColor: '#45310c'}
        }} >
            <Stack.Screen name='category' component={CategoryScreen} />
            <Stack.Screen name='meals' component={MealScreen} />
            <Stack.Screen name='detail' component={MealDetailScreen} />
            
        </Stack.Navigator>
    </NavigationContainer>
     
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
