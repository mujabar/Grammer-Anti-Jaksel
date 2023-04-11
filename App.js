import React, { Component } from "react";
import {
  Alert,
  Button,
  TextInput,
  View,
  StyleSheet,
  Text,
  Picker,
  Image,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from "./pages/splashScreen";
import Home from "./pages/Home";
import Materi from "./pages/materi";
import Vidio from "./pages/vidio";
import Material from "./pages/material";
import MaterialId from "./pages/materialId"
import QuizPage from "./pages/Quiz";
import Skor from "./pages/skor";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Materi"
          component={Materi}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Vidio"
          component={Vidio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Material"
          component={Material}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MaterialId"
          component={MaterialId}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizPage"
          component={QuizPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Skor"
          component={Skor}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
