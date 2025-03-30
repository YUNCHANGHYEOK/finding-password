import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { GameContext } from '../contexts/GameContext';

export default function HomeScreen({ navigation }) {
  const { dispatch } = useContext(GameContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚀 The Password Game</Text>
      <Button title="게임 시작" onPress={() => {
        dispatch({ type: 'RESET' });
        navigation.navigate('Game');
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 30, marginBottom: 20 }
});