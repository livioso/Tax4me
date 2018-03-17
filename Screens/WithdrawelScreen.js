import React from 'react';
import { ActionSheetIOS, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Picker, Dimensions} from 'react-native';
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'NewPaymentScreen' })],
});

const InvestCircle = ({title, subtitle, color}) => {
  return (
    <TouchableOpacity
      style={{
        margin: 5,
        marginTop: 0,
        borderWidth: 0,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        height:150,
        width:150,
        backgroundColor: color,
        borderRadius:150,
        }}>
          <View style={{
            margin: 2,
            borderWidth: 0,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            height:120,
            width:120,
            backgroundColor: 'white',
            borderRadius:120,
          }}>
            <Text style={{color: color, fontSize: 20, fontWeight: '300'}}>{title}</Text>
            <Text style={{color: color, fontSize: 20, fontWeight: '200'}}>{subtitle}</Text>
          </View>
      </TouchableOpacity>

  )
}

export default class TransactionOverview extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'My Taxes',
    headerTitleStyle : {textAlign: 'center',alignSelf:'center', color: 'white'},
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#DE6517',
    },
  });

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{margin: 15}}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
            <InvestCircle subtitle="in CHF" title="145.12 CHF" color="black" />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <InvestCircle subtitle="in ETH" title="145.12 CHF" color="#DE6517" />
            <InvestCircle subtitle="in BTC" title="201.45 CHF" color="#DE6517" />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', marginLeft: 10, marginRight: 10}}>
          <View style={{height: 50}}>
            <Button onPress={() => {
                this.props.navigation.dispatch(resetAction)
              }}
              title="New Payment"
              color="#DE6517"
            />
          </View>
          <View style={{height: 50}}>
            <Button onPress={() => {
              ActionSheetIOS.showActionSheetWithOptions({
                options: [
                  "Withdraw at ATM",
                  "Send to Bankaccount",
                ],
                cancelButtonIndex: 0,
                destructiveButtonIndex: 2,
              },
              (buttonIndex) => {
                switch (buttonIndex) {
                  case 0:
                    break;
                  case 1:
                    break;
                  case 2:
                    break;
                  default:
                    break;
                }
                });
                }}

                color="#DE6517"
                title="New Payment"
              />
          </View>
        </View>
      </View>
    );
  }
}

