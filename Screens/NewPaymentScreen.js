import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default class NewPaymentScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'New Payment',
    headerTitleStyle : {textAlign: 'center',alignSelf:'center', color: 'white'},
    headerStyle: {
      backgroundColor: '#DE6517',
    },
  });

  constructor(props) {
    super(props);

    this.state = {
      amount: '0'
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
                onChangeText={(amount) => this.setState({amount})}
                onFocus={() => this.setState({amount: ''})}
                value={this.state.amount}
              />
              <Text style={{fontSize: 30, alignSelf: 'flex-end', marginLeft: 10}}>CHF</Text>
            </View>
            <Text>You save {this.state.amount * 0.01} CHF</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
             style={{
                 borderWidth: 0,
                 borderColor:'rgba(0,0,0,0.2)',
                 alignItems:'center',
                 justifyContent:'center',
                 width:120,
                 height:120,
                 backgroundColor:'#DE6517',
                 borderRadius:120,
                 }}>
                 <Text style={{color: 'white', fontSize: 50}}>M</Text>
               </TouchableOpacity>

             <Text style={{margin: 10}}>Migros</Text>
             <Text>-</Text>
          </View>

          <View style={{height: 50, width: 400}}>
             <Button onPress={() => {
               this.props.screenProps.triggerNewPayment(this.state.amount)
               this.props.navigation.navigate('ConfirmationScreen')
              }}
              title="Send it now"
              color="#DE6517"
            />
          </View>
        </View>
      )
  }
}

