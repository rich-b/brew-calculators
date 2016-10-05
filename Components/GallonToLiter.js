

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native'

class GallonToLiter extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  gToL = (gallon) => {
    this.setState({
      liter: (gallon / 0.26417).toFixed(2)
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Enter Gallon Value to Convert to Liter
        </Text>
        
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, textAlign: 'center'}}
          editable = {true}
          onChangeText={this.gToL}
        />
        <Text>gallons</Text>
        
        <Text>
          {this.state.liter}
        </Text>
        
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    marginTop: 50,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('GallonToLiter', () => GallonToLiter);

module.exports = GallonToLiter;