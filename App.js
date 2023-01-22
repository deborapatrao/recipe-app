import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, View } from 'react-native';
import Header  from './src/components/layout/Header';

const App = () => {
  return (

    <NativeBaseProvider>
      <Header />
      <StatusBar style="light" />
    </NativeBaseProvider>
  )
}

export default App