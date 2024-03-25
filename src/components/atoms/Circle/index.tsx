import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Circle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle2}>
        <View style={styles.circle1}>
          <Text style={styles.text}>{'Add\nPhoto'}</Text>
        </View>
      </View>
    </View>
  );
};

export default Circle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  circle1: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#F0F0F0',
  },
  circle2: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    border: 1,
    borderStyle: 'dashed',
    borderColor: '#8D92A3',
    borderWidth: 3.5,
    borderRadius: 180,
  },
});
