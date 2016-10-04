
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native'

class WaterCalculator extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      batchSize: 5,
      trubLoss: 0.5,
      boilTime: 1,
      boiloffPercent: 10,
      equipLoss: 1,
      grainBill: 10,
      mashThickness: 1.25,
      grainTemp: 70,
      targetTemp: 152,
      totalWater: 0,
      mashWater: 0,
      spargeWater: 0,
      strikeTemp: 0,
      preboilWater: 0
    };
  }
  
  componentDidMount() {
    this.updateCalculations();
  }
  
  updateCalculations = (updatedState) => {
    const updatedValues = Object.assign({}, this.state, updatedState);
    const shrinkagePercent = 4;
    const absorptionRate = 0.13;
    
    const totalWater = (((updatedValues.batchSize + updatedValues.trubLoss)/(1-(shrinkagePercent/100)))/
                   (1-(updatedValues.boilTime*(updatedValues.boiloffPercent/100)))) + updatedValues.equipLoss + (updatedValues.grainBill * absorptionRate);
    const mashWater = (updatedValues.grainBill * updatedValues.mashThickness) / 4;
    const spargeWater = totalWater - mashWater;
    const strikeTemp = ((((updatedValues.grainBill *0.05)+mashWater *1)*updatedValues.targetTemp) - ((updatedValues.grainBill*0.05)*updatedValues.grainTemp))/mashWater *1;
    const preboilWater = totalWater - (updatedValues.grainBill * absorptionRate) - updatedValues.equipLoss;
    
    this.setState(Object.assign({}, updatedValues, {
      totalWater,
      mashWater,
      spargeWater,
      strikeTemp,
      preboilWater
    }));
  }
  
  getDecimal = (value) => {
    return value && value.toFixed(2).toString();
  }

  render() {
    
    const batchSize = this.getDecimal(this.state.batchSize);
    const grainBill = this.getDecimal(this.state.grainBill);
    const boilTime = this.getDecimal(this.state.boilTime);
    const trubLoss = this.getDecimal(this.state.trubLoss);
    const equipLoss = this.getDecimal(this.state.equipLoss);
    const mashThickness = this.getDecimal(this.state.mashThickness);
    const grainTemp = this.getDecimal(this.state.grainTemp);
    const targetTemp = this.getDecimal(this.state.targetTemp);
    const boiloffPercent = this.getDecimal(this.state.boiloffPercent);
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Mash and Sparge Water Calculator
        </Text>
        
        <View style={styles.form}>
          <View style={styles.formRow}>
            <Text>Batch Size (gal)</Text>
            <TextInput style={styles.entry} editable = {true} value={batchSize}
              onChangeText={(batchSize) => this.updateCalculations({batchSize: parseFloat(batchSize)})}
            />
          </View>
          
          <View style={styles.formRow}>
            <Text>Grain Bill (lbs)</Text>
            <TextInput style={styles.entry} editable = {true} value={grainBill}
              onChangeText={(grainBill) => this.updateCalculations({grainBill: parseFloat(grainBill)})}
            />
          </View>
          
          <View style={styles.formRow}>
            <Text>Boil Time (hrs)</Text>
            <TextInput style={styles.entry} editable = {true} value={boilTime}
              onChangeText={(boilTime) => this.updateCalculations({boilTime: parseFloat(boilTime)})}
            />
          </View>
          
          <View style={styles.formRow}>
            <Text>Trub Loss (gal)</Text>
            <TextInput style={styles.entry} editable = {true} value={trubLoss}
              onChangeText={(trubLoss) => this.updateCalculations({trubLoss: parseFloat(trubLoss)})}
            />
          </View>
          
          <View style={styles.formRow}>
            <Text>Equipment Loss (gal)</Text>
            <TextInput style={styles.entry} editable = {true} value={equipLoss}
              onChangeText={(equipLoss) => this.updateCalculations({equipLoss: parseFloat(equipLoss)})}
            />
          </View>
          
          <View style={styles.formRow}>
            <Text>Mash Thickness (qts/lbs)</Text>
            <TextInput style={styles.entry} editable = {true} value={mashThickness}
              onChangeText={(mashThickness) => this.updateCalculations({mashThickness: parseFloat(mashThickness)})}
            />
          </View>
          
          <View style={styles.formRow}>
            <Text>Grain Temperature (deg. F)</Text>
            <TextInput style={styles.entry} editable = {true} value={grainTemp}
              onChangeText={(grainTemp) => this.updateCalculations({grainTemp: parseFloat(grainTemp)})}
            />
          </View>
          
          <View style={styles.formRow}>
            <Text>Target Temperature (deg. F)</Text>
            <TextInput style={styles.entry} editable = {true} value={targetTemp}
              onChangeText={(targetTemp) => this.updateCalculations({targetTemp: parseFloat(targetTemp)})}
            />
          </View>
          
          
          
          <View style={styles.formRow}>
            <Text>% boiloff per hour</Text>
            <TextInput style={styles.entry} editable = {true} value={boiloffPercent}
              onChangeText={(boiloffPercent) => this.updateCalculations({boiloffPercent: parseFloat(boiloffPercent)})}
            />
          </View>
          
          
          
          
          <Text>Results</Text>
          
          <View style={styles.formRow}>
            <Text>Total Water Needed (gal)</Text>
            <Text>{this.state.totalWater.toFixed(2)}</Text>
          </View>
          <View style={styles.formRow}>
            <Text>Mash Water Needed (gal)</Text>
            <Text>{this.state.mashWater.toFixed(2)}</Text>
          </View>
          <View style={styles.formRow}>
            <Text>Sparge Water Needed (gal)</Text>
            <Text>{this.state.spargeWater.toFixed(2)}</Text>
          </View>
          <View style={styles.formRow}>
            <Text>Strike Temperature (F)</Text>
            <Text>{this.state.strikeTemp.toFixed(2)}</Text>
          </View>
          <View style={styles.formRow}>
            <Text>Preboil wort produced(gal)</Text>
            <Text>{this.state.preboilWater.toFixed(2)}</Text>
          </View>
          
          
        </View>
        
        
        
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
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
  formRow: {
    flexDirection: 'row'
  },
  entry: {
    height: 30,
    width: 45,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'left',
    alignItems: 'flex-end'
  }
});

AppRegistry.registerComponent('WaterCalculator', () => WaterCalculator);

module.exports = WaterCalculator;