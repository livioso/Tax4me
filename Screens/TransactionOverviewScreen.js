import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, SectionList } from 'react-native';
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'NewPaymentScreen' })],
});

const renderEntry = (entry) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{fontSize: 30, fontWeight: '200', marginLeft: 10}}>{entry.to}</Text>
      <View style={{marginRight: 10, marginTop: 5, marginBottom: 5}}>
        <Text style={{fontSize: 30}}>{(entry.amount).toFixed(2)} CHF</Text>
        <Text style={{color: '#DE6517'}}>Tax {(entry.amount * 0.05).toFixed(2)} CHF</Text>
      </View>
    </View>
  );
}

const renderSectionHeader = (section) => {
  return (
    <View style={{backgroundColor: '#DE6517'}}>
      <Text style={{ fontSize: 15, marginLeft: 10, margin: 5, color: 'white' }}>{section.date}</Text>
    </View>
  )
}

const RenderSummary = ({transactions}) => {

  const total = transactions
    .map(xs => xs.data)
    .reduce((ll, mm) => ll.concat(mm), [])
    .reduce((prev, elem) => prev + elem.amount, 0)

  return (
    <View>
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
             <Text style={{color: 'white', fontSize: 30, fontWeight: '200'}}>{total}</Text>
             <Text style={{color: 'white', fontSize: 20, fontWeight: '200'}}>CHF</Text>
           </TouchableOpacity>

         <Text style={{margin: 10}}>Total Tax</Text>
      </View>
    </View>
  )

}

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
    ]};
  }

  render() {
    return (
      <View style={styles.container}>
        <RenderSummary transactions={this.state.transactions}/>
        <SectionList
          sections={this.state.transactions}
          renderItem={({item}) => renderEntry(item)}
          renderSectionHeader={({section}) => renderSectionHeader(section)}
          keyExtractor={(item, index) => index}
        />

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
                this.props.navigation.dispatch(resetAction)
              }}
              title="My Taxes"
              color="#DE6517"
            />
          </View>
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
})
