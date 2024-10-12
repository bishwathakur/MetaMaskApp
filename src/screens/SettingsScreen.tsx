import React from 'react';
import { View, Switch, Button, StyleSheet, Text } from 'react-native';

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text>Notification Preferences</Text>
            <Switch />
            <Button title="Update Face ID/PIN" onPress={() => { /* Face ID setup here */ }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 16 },
});
