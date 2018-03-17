import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const RenderConfirmationRow = ({title, value}) => {
return (
   <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
     <Text style={{fontSize: 20, fontWeight: '200', marginLeft: 10, marginTop: 2}}>{title}</Text>
     <Text style={{fontSize: 20, marginLeft: 10}}>{value.toFixed(2)}CHF</Text>
   </View>
  )
}

export default class ConfirmationScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Confirmation',
    headerTitleStyle : {textAlign: 'center',alignSelf:'center', color: 'white'},
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#DE6517',
    },
  });

  render() {
  return (
    <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
        <View style={{
            borderWidth: 0,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:120,
            height:120,
            backgroundColor:'#DE6517',
            borderRadius:120,
            }}>
            <Text style={{color: 'white', fontSize: 60, fontWeight: 'bold'}}>✓</Text>
          </View>
          <Text style={{margin: 10}}>Payment Successful</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center'}}>
          <View>
            <RenderConfirmationRow title="Merchant Gets" value={getLatestTransactionValue(this.props.screenProps.transactions)}/>
            <RenderConfirmationRow title="Your Tax" value={getLatestTransactionValue(this.props.screenProps.transactions) * this.props.screenProps.taxRate}/>
            <View style={{height: 20}} />
            <RenderConfirmationRow title="Total Debited" value={getLatestTransactionValue(this.props.screenProps.transactions) * (1 + this.props.screenProps.taxRate)}/>
          </View>
        </View>
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


  const getLatestTransactionValue = (transactions) => {
    return parseFloat(transactions[0].data[0].amount)
  }
