import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
    navigation: HomeScreenNavigationProp;
}

export default function HomeScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <Button title="Notifications" onPress={() => navigation.navigate('Notifications')} />
            <Button title="Recovery Key" onPress={() => navigation.navigate('Recovery')} />
            <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 16 },
});
