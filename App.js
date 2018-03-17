import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import NewPaymentScreen from './Screens/NewPaymentScreen';
import TransactionOverviewScreen from './Screens/TransactionOverviewScreen';
import ConfirmationScreen from './Screens/ConfirmationScreen';
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
  },
  {
    initialRouteName: 'NewPaymentScreen',
  }
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '0'
    };
  }

  render() {
    return <RootStack screenProps={{
      triggerNewPayment: () => {}
    }} />;
  }
}
