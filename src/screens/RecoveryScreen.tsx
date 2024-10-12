import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default function RecoveryScreen() {
    return (
        <View style={styles.container}>
            <Text>Set Up or Use Recovery Key</Text>
            <Button title="Set Up Recovery" onPress={() => { /* Setup logic here */ }} />
            <Button title="Use Recovery Key" onPress={() => { /* Recovery logic here */ }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
