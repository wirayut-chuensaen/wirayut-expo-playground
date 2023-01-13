import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainPage from "./pages/MainPage";
import CustomNotificationSoundPage from "./pages/CustomNotificationSoundPage";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }} initialRouteName="main">
                <Stack.Screen name="main" component={MainPage} />
                <Stack.Screen name="custom_notification_sound" component={CustomNotificationSoundPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}