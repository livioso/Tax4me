import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ConfirmationScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    transactionValue: 50,
    taxRate: 0.05,
    title: 'Confirmation',
    headerTitleStyle : {textAlign: 'center',alignSelf:'center', color: 'white'},
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#DE6517',
    },
  });

  const RenderConfirmationRow = (row) => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 30, fontWeight: '200', marginLeft: 10}}>{row.title}</Text>
        <View style={{marginRight: 10, marginTop: 5, marginBottom: 5}}>
          <Text style={{fontSize: 30}}>{row.value.toFixed(2)}CHF</Text>
        </View>
      </View>
    )
  }


  render() {
    return (
      <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
        <Text>Confirmation</Text>
        <RenderConfirmationRow row={title:"Merchant Receives", value={transactionValue}}/>
        <RenderConfirmationRow row={title:"Your Tax", value={transactionValue * taxRate}}/>
        <RenderConfirmationRow row={title:"Total Debited", value={transactionValue * (1 + taxRate)}}/>

        <View style={{height: 50, width: 400}}>
          <Button onPress={() => {
            this.props.navigation.navigate('TransactionOverviewScreen')
            }}
            title="All Transactions"
            color="#DE6517"
          />
        </View>
      </View>
    );
  }
}
