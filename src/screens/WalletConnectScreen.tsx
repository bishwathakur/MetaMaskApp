import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { connectMetaMask } from '../services/metamaskService';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type WalletConnectScreenNavigationProp = StackNavigationProp<RootStackParamList, 'WalletConnect'>;

interface Props {
    navigation: WalletConnectScreenNavigationProp;
}

export default function WalletConnectScreen({ navigation }: Props) {
    const [connected, setConnected] = useState(false);

    const handleConnect = async () => {
        const success = await connectMetaMask();
        if (success) {
            setConnected(true);
            navigation.replace('Home');
        }
    };

    return (
        <View style={styles.container}>
            {connected ? <Text>Connected</Text> : <Button title="Connect to MetaMask" onPress={handleConnect} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
