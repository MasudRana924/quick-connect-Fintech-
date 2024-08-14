import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const HoldButton = () => {
  const [progressVisible, setProgressVisible] = useState(false); // State to control visibility of progress bar
  const progressAnim = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    setProgressVisible(true); // Show progress bar on press in

    // Start progress animation
    Animated.timing(progressAnim, {
      toValue: 1,
      duration: 2000, // 2 seconds
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    // Reset progress animation and hide progress bar
    progressAnim.stopAnimation(() => {
      progressAnim.setValue(0);
      setProgressVisible(false); // Hide progress bar on press out
    });
  };

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      {progressVisible && (
        <View style={styles.progressContainer}>
          <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
        </View>
      )}

      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={styles.button} // Keep button style constant
      >
        <Text style={styles.buttonText}>Tap and Hold</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Full width of the container
  },
  button: {
    backgroundColor: '#1e90ff', // Button color remains blue
    paddingVertical: 20,
    width: '100%', // Full width
    alignItems: 'center', // Center text horizontally
    borderTopLeftRadius: 30, // Curved top-left corner
    borderTopRightRadius: 30, // Curved top-right corner
    borderBottomLeftRadius: 10, // Slightly curved bottom-left corner
    borderBottomRightRadius: 10, // Slightly curved bottom-right corner
    overflow: 'hidden', // Hide overflow for curved corners
    position: 'relative',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressContainer: {
    position: 'absolute', // Position progress bar above the button
    top: 0,
    height: 10,
    width: '100%',
    backgroundColor: '#ddd',
    overflow: 'hidden',
    zIndex: 1, // Make sure progress bar is above the button
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#1e90ff', // Progress bar color matches the button
  },
});

export default HoldButton;
