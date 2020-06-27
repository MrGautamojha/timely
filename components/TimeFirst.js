/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerrr: {
    alignItems: 'stretch',

    flexGrow: 1,
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'Arial Rounded MT Bold',
    color: '#3472df',
  },
  p: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'normal',
    fontFamily: 'Arial Rounded MT Bold',
    color: '#666666',
  },

  loginContainer: {
    flexDirection: 'row',
    backgroundColor: '#3472df',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: width * 0.8,
    height: 55,
    borderColor: '#fbc531',
    borderRadius: 5,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: '#FFF',
  },
});

export default function TimeFirst(props) {
  return (
    <View style={[styles.containerrr, {backgroundColor: '#FFF'}]}>
      <StatusBar translucent backgroundColor="#3472df" />
      {/* <View style={{ flex:1,justifyContent: 'center', alignItems: 'center',marginTop:0,marginBottom:0,}}>

    <Image
          source={require('../images/logo.png')}
          style={{
            width:135,
            height:100,
            marginLeft:0,
            marginTop:0,

          }}
        />
 </View> */}
      <ScrollView>
        <View
          style={{
            flexdirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <Image source={require('../images/timefirst.png')} />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.paragraph}>Welcome</Text>

          <View
            style={{
              flexdirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
              marginBottom: 30,
              width: width * 0.8,
            }}>
            <Text style={styles.p}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100,
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('WelcomeBiryani')}>
            <View style={styles.loginContainer}>
              <Text style={styles.textStyle}>Let's Start</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
// BiryaniOne.navigationOptions = () => ({
//   header: null,
//   headerVisible: false,
// });
