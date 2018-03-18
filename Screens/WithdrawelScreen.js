import React from 'react';
import { ActionSheetIOS, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Picker, Dimensions} from 'react-native';
import Pie from 'react-native-pie'
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'IdleScreen' })],
});

const InvestCircle = ({title, subtitle, color}) => {
  return (
    <TouchableOpacity
      style={{
        margin:5,
        borderWidth: 0,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        height:100,
        width:100,
        backgroundColor: color,
        borderRadius:100,
        }}>
        <Text style={{color: "white", fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
        <Text style={{color: "white", fontSize: 20, fontWeight: '200'}}>{subtitle}</Text>
      </TouchableOpacity>

  )
}

export default class TransactionOverview extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'My Investments',
    headerTitleStyle : {textAlign: 'center',alignSelf:'center', color: 'white'},
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#DE6517',
    },
  });

  render() {

    const total = this.props.screenProps.transactions
      .map(xs => xs.data)
      .reduce((ll, mm) => ll.concat(mm), [])
      .reduce((prev, elem) => prev + elem.amount * this.props.screenProps.taxRate, 0)
      .toFixed(2)

    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{margin: 15}}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
            <View>
              <Pie
                radius={100}
                innerRadius={80}
                series={[10, 20, 30, 40]}
                colors={['#50E2BF', '#01AB52', '#AB7001', '#78633C']} />
              <View style={styles.gauge}>
                <Text style={styles.gaugeText}>{total} CHF</Text>
                <Text style={{fontSize: 20}}>Total</Text>
              </View>
            </View>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
            <Text style={{margin: 10}}>Portfolio</Text>
            <View style={{ flexDirection: 'row' }}>
              <InvestCircle title="LTC" subtitle={`${(20).toFixed(2)}%`} color="#01AB52" />
              <InvestCircle title="XRP" subtitle={`${(10).toFixed(2)}%`} color="#50E2BF" />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <InvestCircle title="ETH" subtitle={`${(30).toFixed(2)}%`} color="#AB7001" />
              <InvestCircle title="BTC" subtitle={`${(40).toFixed(2)}%`} color="#78633C" />
            </View>
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
                  "Send to Bankaccount",
                  "Make Investment",
                  "Cash Withdrawal",
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
                title="Change"
              />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  gauge: {
    position: 'absolute',
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    color: '#000',
  },
})
