/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import TimeLogin from './components/TimeLogin';
import TimeFirst from './components/TimeFirst';

console.disableYellowBox = true;

const App = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="#3472df" />
      {/* <TimeLogin /> */}
      <TimeFirst />
    </>
  );
};

export default App;
