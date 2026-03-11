import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function AppNavigator() {
  return (
    <View style={styles.View}>
      <Text>AppNavigator</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
