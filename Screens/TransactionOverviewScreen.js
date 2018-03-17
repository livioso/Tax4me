import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'NewPaymentScreen' })],
});


export default class TransactionOverview extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Transactions',
    headerTitleStyle : {textAlign: 'center',alignSelf:'center', color: 'white'},
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#DE6517',
    },
  });

  constructor(props) {
    super(props);
    this.state = {
      transactions: [
        {to: 'Migros', 'amount': 19.95},
        {to: 'Coop', 'amount': 29.45},
        {to: 'Migros Restaurant', 'amount': 20.00},
        {to: 'Coop', 'amount': 15.00},
        {to: 'Migros', 'amount': 98.00},
      ]
    };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
        <Text>Confirmation</Text>
        <View style={{height: 50, width: 400}}>
          <Button onPress={() => {
            this.props.navigation.dispatch(resetAction);
            }}
            title="Add Payment"
            color="#DE6517"
          />
        </View>
      </View>
    );
  }
}
