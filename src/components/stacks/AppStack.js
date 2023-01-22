import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text } from 'react-native';
import IndexScreen from "../screens/IndexScreen";
import ShowScreen from "../screens/ShowScreen";

const Stack = createNativeStackNavigator()

const AppStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name='Index'
                component={IndexScreen}
                options={{
                    title: 'Recipe App',
                    headerStyle:{
                        backgroundColor:'#2c3e50'
                    },
                    headerTitleStyle:{
                        color: '#fff'
                    }
                }}
                ></Stack.Screen>

                <Stack.Screen
                name='Show'
                component={ShowScreen}
                options={() => ({
                    title: 'some name'
                })}>

                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppStack