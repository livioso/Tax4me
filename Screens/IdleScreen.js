import React from 'react';
import { View, Text, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import Pulse from 'react-native-pulse';

export default class LocationPulseLoader extends React.Component {

  static navigationOptions = {
    title: 'Tax4Me',
    headerTitleStyle : {textAlign: 'center',alignSelf:'center', color: 'white'},
    headerStyle: {
      backgroundColor: '#DE6517',
    },
  }

  render() {
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Pulse color='#DE6517' numPulses={1} diameter={350} speed={0.001} duration={0.1} />
        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('NewPaymentScreen')}}
          style={{
            borderWidth: 0,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:150,
            height:150,
            backgroundColor:'#DE6517',
            borderRadius:150,
            }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight:'bold'}}>Pay Now</Text>
          </TouchableOpacity>
        </View>
    )
  }
}
