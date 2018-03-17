import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import NewPaymentScreen from './Screens/NewPaymentScreen';
import TransactionOverviewScreen from './Screens/TransactionOverviewScreen';
import ConfirmationScreen from './Screens/ConfirmationScreen';
import WithdrawelScreen from './Screens/WithdrawelScreen';
import { StackNavigator } from 'react-navigation';

const RootStack = StackNavigator(
  {
    NewPaymentScreen: {
      screen: NewPaymentScreen,
    },
    TransactionOverviewScreen: {
      screen: TransactionOverviewScreen,
    },
    ConfirmationScreen: {
      screen: ConfirmationScreen,
    },
    WithdrawelScreen: {
      screen: WithdrawelScreen,
    },
  },
  {
    initialRouteName: 'NewPaymentScreen',
  }
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taxRate: 0.05,
      transactions: [
        {date: 'Today', data: []},
        {date: 'Friday, 16. March 2018', data: [
          {to: 'Migros', 'amount': 19.95},
          {to: 'Coop', 'amount': 29.45},
          {to: 'Manora', 'amount': 20.00},
          {to: 'Coop', 'amount': 15.00},
          {to: 'Migros', 'amount': 98.00}
        ]},
        {date: 'Wednesday, 14. March 2018', data: [
          {to: 'Migros', 'amount': 19.95},
          {to: 'Coop', 'amount': 29.45},
          {to: 'Manora', 'amount': 20.00},
          {to: 'Coop', 'amount': 15.00},
          {to: 'Migros', 'amount': 98.00}
        ]}
      ]
    };
  }

  render() {
    return <RootStack
      screenProps={{
        ...this.state,
        addPayment: ({amount, to}) => {
          const newState = {...this.state}
          newState.transactions[0].data.unshift({to, amount})
          this.setState(newState)
        }
    }} />;
  }
}
