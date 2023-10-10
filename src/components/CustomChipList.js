import {LinearGradient} from 'expo-linear-gradient';
import {Chip} from '@rneui/base';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

export default function CustomChiplist() {
  return (
    <SafeAreaView style={styles.chipContainer}>
      <Chip
        color={'black'}
        type="outline"
        title={'chip'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chipContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical:30,
    marginHorizontal:10,
  },
});
