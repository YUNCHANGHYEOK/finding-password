import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ResultScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 성공! 규칙 다 지켰어요!</Text>
      <Button title="다시하기" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 26, marginBottom: 20 }
});