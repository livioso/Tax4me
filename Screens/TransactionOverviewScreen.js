import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, SectionList } from 'react-native';
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
      {date: 'Today', data: [
        {to: 'Migros', 'amount': 19.95}]
      },
      {date: 'Friday, 16. March 2018', data: [
        {to: 'Migros', 'amount': 19.95},
        {to: 'Coop', 'amount': 29.45},
        {to: 'Migros Restaurant', 'amount': 20.00},
        {to: 'Coop', 'amount': 15.00},
        {to: 'Migros', 'amount': 98.00}
      ]},
      {date: 'Wednesday, 14. March 2018', data: [
        {to: 'Migros', 'amount': 19.95},
        {to: 'Coop', 'amount': 29.45},
        {to: 'Migros Restaurant', 'amount': 20.00},
        {to: 'Coop', 'amount': 15.00},
        {to: 'Migros', 'amount': 98.00}
      ]}
    ]};
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.transactions}
          renderItem={({item}) => <Text style={styles.item}>{item.to} {item.amount} CHF</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.date}</Text>}
          keyExtractor={(item, index) => index}
        />
        <View style={{height: 50, width: 400}}>
           <Button onPress={() => {
              this.props.navigation.dispatch(resetAction)
            }}
            title="New Payment"
            color="#DE6517"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
