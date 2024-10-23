import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomKeyboard = ({ onKeyPress }) => {
  const rows = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['backspace','0']
  ];

  return (
    <View style={styles.keyboard}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.keyboardRow}>
          {row.map((key) => (
            <TouchableOpacity
              key={key}
              onPress={() => onKeyPress(key)}
              style={styles.keyButton}
            >
              <Text style={styles.keyText}>
                {key === 'backspace' ? '⌫' : key}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    width: '100%',
    padding: 10,
    backgroundColor: 'gray'
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  keyButton: {
    padding: 20,
    backgroundColor: '#ccc',
    borderRadius: 5
  },
  keyText: {
    fontSize: 24,
    color: '#000'
  }
});

export default CustomKeyboard;
