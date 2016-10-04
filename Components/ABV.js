
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
        <Text style={styles.welcome}>
          ABV Calculator
        </Text>
        
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, textAlign: 'center'}}
          editable = {true}
          onChangeText={this.setOG}
        />
        <Text>OG</Text>
        
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, textAlign: 'center'}}
          editable = {true}
          onChangeText={this.setFG}
        />
        <Text>FG</Text>
        
        <Text>
          ABV => 
          {this.state.abv}
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

AppRegistry.registerComponent('ABV', () => ABV);

module.exports = ABV;