import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, View } from 'react-native';
import RecipesContainer from './src/components/containers/RecipesContainer';
import Header  from './src/components/layout/Header';

const App = () => {
  return (

    <NativeBaseProvider>
      <Header />
      <RecipesContainer />
      <StatusBar style="light" />
    </NativeBaseProvider>
  )
}

export default App