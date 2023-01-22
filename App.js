import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import RecipesContainer from './src/components/containers/RecipesContainer';
import Header  from './src/components/layout/Header';
import AppStack from './src/components/stacks/AppStack';


const App = () => {
  return (

    <NativeBaseProvider>
      {/* <Header /> */}
      {/* <RecipesContainer /> */}
      <AppStack />
      <StatusBar style="light" />
      {/* <Text>Test App.js</Text> */}
    </NativeBaseProvider>
  )
}

export default App