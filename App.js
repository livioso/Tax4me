import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      amount: '0'
    };
  }

  render() {
    return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginTop: 40,
          alignItems: 'center',
        }}>

          <View style={{alignItems: 'center'}}>
            <Text>You are ready to send</Text>
            <View style={{flexDirection: 'row', margin: 10}}>
              <TextInput
                keyboardType="numeric"
                style={{height: 50, width: 100, borderWidth: 0, fontSize: 50, textAlign: 'right'}}
                autoGrow={true}
                onChangeText={(amount) => this.setState({amount})}
                onFocus={() => this.setState({amount: ''})}
                value={this.state.amount}
              />
              <Text style={{fontSize: 30, alignSelf: 'flex-end', marginLeft: 10}}>CHF</Text>
            </View>
            <Text>You save {this.state.amount * 0.1}</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
             style={{
                 borderWidth: 0,
                 borderColor:'rgba(0,0,0,0.2)',
                 alignItems:'center',
                 justifyContent:'center',
                 width:100,
                 height:100,
                 backgroundColor:'lightgrey',
                 borderRadius:100,
                 }}>
                 <Text>CB</Text>
               </TouchableOpacity>

             <Text style={{margin: 10}}>Cloda Boyle</Text>
             <Text>+41 79 123 123</Text>
          </View>

          <View style={{height: 50, width: 400}}>
             <Button
              onPress={() => {alert("")}}
              title="Send it now"
              color="skyblue"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
