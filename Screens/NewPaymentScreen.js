import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default class NewPaymentScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'New Payment',
    headerTitleStyle : {textAlign: 'center',alignSelf:'center', color: 'white'},
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#DE6517',
    },
  });

  constructor(props) {
    super(props);

    this.state = {
      amount: '50'
    };
  }

  render() {
    return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginTop: 40,
          alignItems: 'center',
        }}>

          <View style={{alignItems: 'center'}}>
            <Text>You are ready to send</Text>
            <View style={{flexDirection: 'row', margin: 10}}>
              <TextInput
                keyboardType="numeric"
                style={{height: 50, width: 100, borderWidth: 0, fontSize: 50, textAlign: 'right'}}
                autoGrow={true}
                onChangeText={(amount) => {this.setState({amount: amount.replace('.', '')})}}
                onFocus={() => this.setState({amount: ''})}
                value={this.state.amount}
              />
              <Text style={{fontSize: 30, alignSelf: 'flex-end', marginLeft: 10}}>CHF</Text>
            </View>
            <Text>Your tax {(this.state.amount * this.props.screenProps.taxRate).toFixed(2)} CHF</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
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
                 <Text style={{color: 'white', fontSize: 20, fontWeight:'bold'}}>Migros</Text>
               </TouchableOpacity>
             <Text style={{margin: 10}}>Merchant</Text>
          </View>

          <View style={{height: 50, width: 400}}>
             <Button onPress={() => {
               this.props.screenProps.addPayment({amount: parseFloat(this.state.amount), to: 'Migros'})
               this.props.navigation.navigate('ConfirmationScreen')
              }}
              title="Pay It Now"
              color="#DE6517"
            />
          </View>
        </View>
      )
  }
}

