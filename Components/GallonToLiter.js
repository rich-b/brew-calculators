

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
    this.state = {
      liter: 0
    };
  }
  
  gToL = (gallon) => {
    this.setState({
      liter: (gallon / 0.26417).toFixed(2)
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.directions}>
          Enter Gallon Value to Convert to Liter
        </Text>
        
        <View>
          <TextInput
            style={styles.gallonInput}
            editable = {true}
            onChangeText={this.gToL}
          />

          <Text style={styles.liters}>
            {this.state.liter} liters
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  directions: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 50
  },
  gallonInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center'
  },
  liters: {
    marginTop: 20,
    fontSize: 20,
    color: 'darkslateblue'
  }
});

AppRegistry.registerComponent('GallonToLiter', () => GallonToLiter);

module.exports = GallonToLiter;