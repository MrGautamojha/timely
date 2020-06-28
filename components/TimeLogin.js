/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import {TextField} from 'react-native-material-textfield';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  textContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    padding: 10,
    width: width * 0.85,
    borderColor: '#a9a9a9',
    borderWidth: 1,
    borderRadius: 10,
  },
  textContainer_pwd: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#a9a9a9',
    borderRadius: 10,
  },

  emailIcon: {
    color: '#a9a9a9',

    paddingRight: 23,
  },
  pwdIcon: {
    color: '#a9a9a9',

    paddingRight: 14,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  headText: {
    color: '#ffa801',
    fontSize: 60,
    marginBottom: 10,
  },
  textStyleText: {
    color: '#333',
    fontSize: 16,
    // fontWeight: 'bold',

    width: width * 0.8,
    padding: 0,
  },
  loginContainer: {
    flexDirection: 'row',
    backgroundColor: '#3472df',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: width * 0.85,
    marginBottom: 20,
    borderRadius: 5,
  },
  textStyle: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: '#ecf0f1',
  },
  backgroundVideo: {
    width: width,

    position: 'absolute',
  },

  paragraph: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Arial Rounded MT Bold',
  },
  textl: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textStyleS: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textbottom: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    color: '#000',
    marginTop: 7,
  },
});

export default function TimeLogin() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainContainer}>
        <ImageBackground
          style={styles.backgroundVideo}
          source={require('../images/timelogo.png')}>
          <View style={{marginBottom: height * 0.2}} />
          <View
            style={{
              width: width,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{width: width * 0.8}}>
              <TextField
                label="Email or Phone Number"
                keyboardType="name"
                textColor="#666666"
                tintColor="#3472df"
                baseColor="#3472df"
                style={{}}
              />
            </View>
          </View>

          <View
            style={{
              width: width,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{width: width * 0.8}}>
              <TextField
                label="Password"
                keyboardType="name-phone-pad"
                textColor="#666666"
                tintColor="#3472df"
                baseColor="#3472df"
                secureTextEntry={true}
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <TouchableOpacity>
              <View style={styles.loginContainer}>
                <Text style={styles.textStyle}>LOG IN</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              alert('You Hello');
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <Text style={styles.textStyleS}>Forget Password</Text>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', width: width * 0.8}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                marginTop: 20,
                width: width * 0.3,
              }}>
              <View
                style={{
                  backgroundColor: '#ececec',
                  width: width * 0.5,
                  height: 1,
                  marginTop: 10,
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                marginTop: 20,
                width: width * 0.4,
              }}>
              <Text style={styles.textbottom}>OR</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                marginTop: 20,
                width: width * 0.3,
              }}>
              <View
                style={{
                  backgroundColor: '#ececec',
                  width: width * 0.5,
                  height: 1,
                  marginTop: 10,
                }}
              />
            </View>
          </View>

          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity onPress={alert}>
              <Image
                source={require('../images/glogoo.png')}
                style={{
                  height: 50,
                  width: 300,
                  marginTop: 50,
                }}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
// WelcomeLogin.navigationOptions = () => ({
//   header: null,
//   headerVisible: false,
// });
/*<View style={{justifyContent:'center',alignItems:'center',width:width*.90}}>
      <TouchableOpacity onPress={()=>props.navigation.navigate("RestaurantLogin")}>
      <Text style={{fontSize:14,fontWeight:'bold'}}
        >Admin Login</Text>
</TouchableOpacity>
      </View>*/
