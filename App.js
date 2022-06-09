import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default function App() {
  let [count, setCount] = useState(0);

  function buttonPressed() {
    console.log('You pressed me ouch!');
    setCount(count + 1);
  }

  function renderEncouragingText() {
    if (count >= 10 && count < 20) {
      return 'Keep going!';
    } if (count >= 20 && count < 30) {
      return 'Take a break!';
    } if (count >= 30) {
      return 'STOP!!!';
    }
  }

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={buttonPressed}>
        <Text style={styles.buttonText}>Press me!</Text>
      </TouchableOpacity>
      <Text style={styles.encouragingText}>{renderEncouragingText()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  encouragingText: {
    marginTop: 50,
    color: 'darkgrey',
  },
  button: {
    backgroundColor: 'olive',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
});
