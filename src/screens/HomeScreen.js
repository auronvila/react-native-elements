import {FlatList, SafeAreaView, View} from 'react-native';
import React from 'react';
import {Chip, Divider, Text} from '@rneui/base';
import {LinearGradient} from 'expo-linear-gradient';
import CustomChiplist from '../components/CustomChipList';

export function HomeScreen() {
  const data = [{
    id: 1, name: 'test'
  },
    {
      id: 2, name: 'test1'
    },
    {
      id: 4, name: 'test2'
    },
    {
      id: 5, name: 'test2'
    },
    {
      id: 6, name: 'test2'
    },
    {
      id: 7, name: 'test2'
    },
    {
      id: 8, name: 'test2'
    },
  ]
  return (
    <SafeAreaView>
      <Text style={{alignSelf: 'center', marginTop: 30,}} h2>Home Page</Text>
      <Divider width={2} />
      <FlatList showsHorizontalScrollIndicator={false} horizontal data={data} renderItem={() => <CustomChiplist/>}/>
    </SafeAreaView>
  );
}