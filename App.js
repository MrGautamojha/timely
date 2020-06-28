/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import TimeFirst from './components/TimeFirst';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TimeLogin from './components/TimeLogin';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <TimeLogin />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
