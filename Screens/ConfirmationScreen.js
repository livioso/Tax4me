import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default class TransactionOverview extends React.Component {

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
        <Text>Confirmation</Text>
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
