
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import GallonToLiter from './Components/GallonToLiter';
import WaterCalculator from './Components/WaterCalculator';
import ABV from './Components/ABV';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Project extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to The Super Awesome BrewDay Calculator!
        </Text>
        

        <TabNavigator style={styles.tabs}>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'gallontoliter'}
            renderIcon={() => <Image source={{uri: 'http://image.flaticon.com/icons/svg/168/168557.svg'}} />}
            badgeText="GallonToLiter"
            onPress={() => this.setState({ selectedTab: 'gallontoliter' })}>
            <GallonToLiter />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'water'}
            badgeText="Water"
            onPress={() => this.setState({ selectedTab: 'water' })}>
            <WaterCalculator />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'abv'}
            badgeText="ABV"
            onPress={() => this.setState({ selectedTab: 'abv' })}>
            <ABV />
          </TabNavigator.Item>
        </TabNavigator>
        

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
  tabs: {
    marginBottom: 25,
    alignSelf: 'stretch',
  },
});

AppRegistry.registerComponent('Project', () => Project);
