/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text, StyleSheet, View, Image, TouchableHighlight} from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Alcoholic Games',
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
      flex: 1,
    },
  };
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Cards')}>
          <View>
            <Image source={require('./assets/cards.png')} style={{ width: 200, height: 226 }} />
            <Text style={styles.text}>Ring of Fire</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Dices')}>
          <View>
            <Image source={require('./assets/dices.png')} style={{ width: 200, height: 226 }} />
            <Text style={styles.text}>Freeman</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
