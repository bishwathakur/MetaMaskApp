import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import WalletConnectScreen from '../screens/WalletConnectScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import RecoveryScreen from '../screens/RecoveryScreen';
import SettingsScreen from '../screens/SettingsScreen';

export type RootStackParamList = {
    Splash: undefined;
    WalletConnect: undefined;
    Home: undefined;
    Notifications: undefined;
    Recovery: undefined;
    Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="WalletConnect" component={WalletConnectScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Notifications" component={NotificationScreen} />
                <Stack.Screen name="Recovery" component={RecoveryScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
