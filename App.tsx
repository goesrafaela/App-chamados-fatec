import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Chamado from "./src/screens/Chamado";
import Acompanhar from "./src/screens/Acompanhar";
import Historico from "./src/screens/Hitorico";

import { RootStackParamList } from "./src/navigation/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chamado" component={Chamado} />
        <Stack.Screen name="Acompanhar" component={Acompanhar} />
        <Stack.Screen name="Historico" component={Historico} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
