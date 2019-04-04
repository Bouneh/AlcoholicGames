/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { IconButton, Button, TextInput, Dialog, Portal, Paragraph, Provider as PaperProvider } from 'react-native-paper';
import Dices from '../data/dices';
import shuffle from 'shuffle-array';

export default class DicesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDices: null,
      currentDicesRendering: null,
      freeman: '',
      changeFreemanDialogIsVisible: false,
      freemanDialogIsVisible: false,
      detailsDialogIsVisible: false,
      showButton: true,
    };
  }

  static navigationOptions = {
    title: 'Alcoholic Games - Freeman',
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
      flex: 1,
    },
  };

  _showChangeFreemanDialog = () => this.setState({ changeFreemanDialogIsVisible: true });
  _hideChangeFreemanDialog = () => this.setState({ changeFreemanDialogIsVisible: false });

  _showFreemanDialog = () => this.setState({ freemanDialogIsVisible: true });
  _hideFreemanDialog = () => this.setState({ freemanDialogIsVisible: false });

  _showDetailsDialog = () => this.setState({ detailsDialogIsVisible: true });
  _hideDetailsDialog = () => this.setState({ detailsDialogIsVisible: false });

  showChangeFreeman() {
    this._showChangeFreemanDialog();
  }

  showFreeman() {
    this._showFreemanDialog();
  }

  saveFreeman() {
    this.setState({
      showButton: false,
    });
    this._hideChangeFreemanDialog();
  }

  showDetails() {
    this._showDetailsDialog();
  }

  changeFreemanButton() {
    if (this.state.currentDices && this.state.currentDices.freeman && this.state.showButton) {
      return <View style={styles.addButton}>
        <IconButton icon="add-circle" onPress={() => this.showChangeFreeman()} size={40} color='#0000FF' />
        <Portal>
          <Dialog
            visible={this.state.changeFreemanDialogIsVisible}
            onDismiss={this._hidechangeFreemanDialog}>
            <Dialog.Title>Changer le freeman</Dialog.Title>
            <Dialog.Content>
              <TextInput
                label='Nom'
                value={this.state.freeman}
                onChangeText={text => this.setState({ freeman: text })}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => this.saveFreeman()}>Enregistrer</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>;
    } else {
      return null;
    }
  }

  freemanButton() {
    if (this.state.freeman) {
      return <View style={styles.freemanButton}>
        <IconButton icon="looks-3" onPress={() => this.showFreeman()} size={40} color='#0000FF' />
        <Portal>
          <Dialog
            visible={this.state.freemanDialogIsVisible}
            onDismiss={this._hideFreemanDialog}>
            <Dialog.Title>Freeman</Dialog.Title>
            <Dialog.Content>
              <Paragraph>{this.state.freeman}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={this._hideFreemanDialog}>Fermer</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    }
  }

  detailsDialog() {
    if (this.state.currentDices) {
      return <Portal>
        <Dialog
          visible={this.state.detailsDialogIsVisible}
          onDismiss={this._hideDetailsDialog}>
          <Dialog.Title>Détails</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{this.state.currentDices.gage.description}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={this._hideDetailsDialog}>Fermer</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    }
  }

  rollDices() {
    const dices = shuffle(Dices);
    this.setState({
      currentDices: dices[0],
      currentDicesRendering:
        <TouchableHighlight onPress={() => this.showDetails()}>
          <View style={styles.centered}>
            <Image source={dices[0].image} style={{ width: 175, height: 175 }} />
            <Text style={styles.text}>{dices[0].gage.name}</Text>
          </View>
        </TouchableHighlight>,
      showButton: true,
    });
  }
  
  render() {
    return (
      <PaperProvider>
        <View style={styles.container}>
          <Button mode="contained" onPress={() => this.rollDices()}>
            Lancer les dès
          </Button>
          {this.state.currentDicesRendering}
          {this.freemanButton()}
          {this.changeFreemanButton()}
          {this.detailsDialog()}
        </View>
      </PaperProvider>
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
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 18,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  freemanButton: {
    position: 'absolute',
    top: 10,
    left: 0,
  },
});
