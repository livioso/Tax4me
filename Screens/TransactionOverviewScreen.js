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
      <Text style={{fontSize: 20, fontWeight: '200', marginLeft: 10, marginTop: 5}}>{entry.to}</Text>
      <View style={{marginRight: 10, marginTop: 5, marginBottom: 5}}>
        <Text style={{fontSize: 20}}>{(entry.amount).toFixed(2)} CHF</Text>
        <Text style={{color: '#01AB52'}}>Tax {(entry.amount * 0.05).toFixed(2)} CHF</Text>
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

const RenderSummary = ({transactions, taxRate}) => {

  const total = transactions
    .map(xs => xs.data)
    .reduce((ll, mm) => ll.concat(mm), [])
    .reduce((prev, elem) => prev + elem.amount * taxRate, 0)
    .toFixed(2)

  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
         style={{
             borderWidth: 0,
             borderColor:'rgba(0,0,0,0.2)',
             alignItems:'center',
             justifyContent:'center',
             width:150,
             height:150,
             backgroundColor:'#01AB52',
             borderRadius:150,
             }}>
             <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>{total} CHF</Text>
             <Text style={{color: 'white', fontSize: 20, fontWeight: 'normal'}}>Total</Text>
           </TouchableOpacity>
         <Text style={{margin: 10}}>This Month</Text>
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

  render() {
    return (
      <View style={styles.container}>
        <RenderSummary transactions={this.props.screenProps.transactions} taxRate={this.props.screenProps.taxRate}/>
        <SectionList
          sections={this.props.screenProps.transactions}
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
                this.props.navigation.navigate('WithdrawelScreen')
              }}
              title="Investments"
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
