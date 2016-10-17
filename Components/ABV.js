
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native'

class ABV extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  setOG = (og) => {
    this.setState({
      og,
      abv: this.calculate(og, this.state.fg)
    });
  };

  setFG = (fg) => {
    this.setState({
      fg,
      abv: this.calculate(this.state.og, fg)
    });
  };
  
  calculate = (og, fg) => {
    return ((og - fg) * 131.25).toFixed(2);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.directions}>
          ABV Calculator
        </Text>
        
        <View>
          <TextInput
            style={styles.input}
            editable = {true}
            onChangeText={this.setOG}
          />
          <Text>OG</Text>

          <TextInput
            style={styles.input}
            editable = {true}
            onChangeText={this.setFG}
          />
          <Text>FG</Text>

          <Text style={styles.abv}>
            ABV => 
            {this.state.abv}
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center'
  },
  abv: {
    marginTop: 20,
    fontSize: 20,
    color: 'darkslateblue'
  }
});

AppRegistry.registerComponent('ABV', () => ABV);

module.exports = ABV;