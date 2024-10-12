import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

interface Props {
    navigation: SplashScreenNavigationProp;
}

export default function SplashScreen({ navigation }: Props) {
    useEffect(() => {
        setTimeout(() => navigation.replace('WalletConnect'), 2000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to MetaMask Snap App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 24, fontWeight: 'bold' },
});
