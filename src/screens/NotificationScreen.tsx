import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type NotificationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Notifications'>;

interface Props {
    navigation: NotificationScreenNavigationProp;
}

export default function NotificationScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <Text>Notification List</Text>
            <Button title="Back to Home" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
