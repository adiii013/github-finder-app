import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SearchResultData from "./components/SearchResultData";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='search' component={SearchResultData}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;