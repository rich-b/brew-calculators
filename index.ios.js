
/**
 * @flow
 */

import React, { Component } from 'react';
import GallonToLiter from './Components/GallonToLiter';
import WaterCalculator from './Components/WaterCalculator';
import ABV from './Components/ABV';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS
} from 'react-native';

class Project extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'gallontoliter'
    };
  }

  render() {
    const gallonImage = require('image!gallon')
    const waterImage = require('image!water')
    const alcoholImage = require('image!alcohol')

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Brew Day Helper
        </Text>
        
        <TabBarIOS
          style={styles.tabs}
          itemPositioning="fill"
          tintColor="white"
          barTintColor="darkslateblue">
          <TabBarIOS.Item
            selected={this.state.selectedTab === 'gallontoliter'}
            title="Gallon To Liter"
            icon={{uri: gallonImage.path, scale: 5}}
            onPress={() => this.setState({ selectedTab: 'gallontoliter' })}>
            <GallonToLiter />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            selected={this.state.selectedTab === 'water'}
            title="Mash Water"
            icon={{uri: waterImage.path, scale: 8}}
            onPress={() => this.setState({ selectedTab: 'water' })}
            >
            <WaterCalculator />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            selected={this.state.selectedTab === 'abv'}
            title="ABV"
            icon={{uri: alcoholImage.path, scale: 4}}
            onPress={() => this.setState({ selectedTab: 'abv' })}>
            <ABV />
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    marginTop: 50,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  tabs: {
    alignSelf: 'stretch',
  },
});

AppRegistry.registerComponent('Project', () => Project);
