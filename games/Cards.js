/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { IconButton, Button, TextInput, Dialog, Portal, Paragraph, Provider as PaperProvider } from 'react-native-paper';
import Cards from '../data/cards';
import shuffle from 'shuffle-array';

export default class CardsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: shuffle(Cards),
      currentCard: null,
      index: 0,
      rules: [],
      questionsMaster: '',
      looksMaster: '',
      addRuleDialogIsVisible: false,
      rulesListDialogIsVisible: false,
      changeQuestionsMasterDialogIsVisible: false,
      questionsMasterDialogIsVisible: false,
      changeLooksMasterDialogIsVisible: false,
      looksMasterDialogIsVisible: false,
      detailsDialogIsVisible: false,
      newRule: '',
      showButton: true,
      kings: 1,
    };
  }

  static navigationOptions = {
    title: 'Alcoholic Games - Ring of Fire',
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
      flex: 1,
    },
  };

  _showAddRuleDialog = () => this.setState({ addRuleDialogIsVisible: true });
  _hideAddRuleDialog = () => this.setState({ addRuleDialogIsVisible: false });

  _showRulesListDialog = () => this.setState({ rulesListDialogIsVisible: true });
  _hideRulesListDialog = () => this.setState({ rulesListDialogIsVisible: false });

  _showChangeQuestionsMasterDialog = () => this.setState({ changeQuestionsMasterDialogIsVisible: true });
  _hideChangeQuestionsMasterDialog = () => this.setState({ changeQuestionsMasterDialogIsVisible: false });

  _showQuestionsMasterDialog = () => this.setState({ questionsMasterDialogIsVisible: true });
  _hideQuestionsMasterDialog = () => this.setState({ questionsMasterDialogIsVisible: false });

  _showChangeLooksMasterDialog = () => this.setState({ changeLooksMasterDialogIsVisible: true });
  _hideChangeLooksMasterDialog = () => this.setState({ changeLooksMasterDialogIsVisible: false });

  _showLooksMasterDialog = () => this.setState({ looksMasterDialogIsVisible: true });
  _hideLooksMasterDialog = () => this.setState({ looksMasterDialogIsVisible: false });

  _showDetailsDialog = () => this.setState({ detailsDialogIsVisible: true });
  _hideDetailsDialog = () => this.setState({ detailsDialogIsVisible: false });

  nextCard() {
    this.setState(previousState => ({
      index: previousState.index + 1,
      kings: this.state.cards[this.state.index].gage.name == "Ajout dans le verre" ? previousState.kings + 1 : previousState.kings,
      currentCard:
        <TouchableHighlight onPress={() => this.showDetails()}>
          <View style={styles.centered}>
            <Image source={this.state.cards[this.state.index].image} style={{ width: 150, height: 219 }} />
            <Text style={styles.text}>{this.state.cards[this.state.index].gage.name} {this.state.cards[this.state.index].gage.name == "Ajout dans le verre" ? '(' + this.state.kings + ')' : null}</Text>
          </View>
        </TouchableHighlight>,
      showButton: true,
    }));
  }

  reloadGame() {
    this.setState({
      cards: shuffle(Cards),
      currentCard: null,
      index: 0,
      rules: [],
      questionsMaster: '',
      looksMaster: '',
      addRuleDialogIsVisible: false,
      rulesListDialogIsVisible: false,
      detailsDialogIsVisible: false,
      changeQuestionsMasterDialogIsVisible: false,
      questionsMasterDialogIsVisible: false,
      changeLooksMasterDialogIsVisible: false,
      looksMasterDialogIsVisible: false,
      newRule: '',
      showButton: true,
      kings: 1,
    });
  }

  addRule() {
    this._showAddRuleDialog();
  }

  saveRule() {
    const rules = this.state.rules;
    rules.push(this.state.newRule);
    this.setState({
      rules,
      newRule: '',
      showButton: false,
    });
    this._hideAddRuleDialog();
  }

  showRules() {
    this._showRulesListDialog();
  }

  showChangeQuestionsMaster() {
    this._showChangeQuestionsMasterDialog();
  }

  showQuestionsMaster() {
    this._showQuestionsMasterDialog();
  }

  saveQuestionsMaster() {
    this.setState({
      showButton: false,
    });
    this._hideChangeQuestionsMasterDialog();
  }

  showChangeLooksMaster() {
    this._showChangeLooksMasterDialog();
  }

  showLooksMaster() {
    this._showLooksMasterDialog();
  }

  saveLooksMaster() {
    this.setState({
      showButton: false,
    });
    this._hideChangeLooksMasterDialog();
  }

  showDetails() {
    this._showDetailsDialog();
  }

  gameBoard() {
    if (this.state.index < this.state.cards.length) {
      return <View style={styles.container}>
        <TouchableHighlight onPress={() => this.nextCard()}>
          <View>
            <Image source={require('../assets/cards/back.png')} style={{ width: 150, height: 219 }} />
          </View>
        </TouchableHighlight>
        { this.state.currentCard }
      </View>;
    } else {
      return <View style={styles.containerCenter}>
        <View>
          <Button mode="contained" onPress={() => this.reloadGame()}>
            Relancer le jeu
          </Button>
        </View>
        {this.state.currentCard}
      </View>;
    }
  }

  newRuleButton() {
    if (this.state.index > 0 && this.state.cards[this.state.index - 1].newRule && this.state.showButton) {
      return <View style={styles.addButton}>
        <IconButton icon="add-circle" onPress={() => this.addRule()} size={40} color='#0000FF' />
        <Portal>
          <Dialog
            visible={this.state.addRuleDialogIsVisible}
            onDismiss={this._hideAddRuleDialog}>
            <Dialog.Title>Ajouter une règle</Dialog.Title>
            <Dialog.Content>
              <TextInput
                label='Règle'
                value={this.state.newRule}
                onChangeText={text => this.setState({ newRule: text })}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => this.saveRule()}>Ajouter</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>;
    } else {
      return null;
    }
  }

  changeQuestionsMasterButton() {
    if (this.state.index > 0 && this.state.cards[this.state.index - 1].questionsMaster && this.state.showButton) {
      return <View style={styles.addButton}>
        <IconButton icon="add-circle" onPress={() => this.showChangeQuestionsMaster()} size={40} color='#0000FF' />
        <Portal>
          <Dialog
            visible={this.state.changeQuestionsMasterDialogIsVisible}
            onDismiss={this._hidechangeQuestionsMasterDialog}>
            <Dialog.Title>Changer le maître des questions</Dialog.Title>
            <Dialog.Content>
              <TextInput
                label='Nom'
                value={this.state.questionsMaster}
                onChangeText={text => this.setState({ questionsMaster: text })}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => this.saveQuestionsMaster()}>Enregistrer</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>;
    } else {
      return null;
    }
  }

  changeLooksMasterButton() {
    if (this.state.index > 0 && this.state.cards[this.state.index - 1].looksMaster && this.state.showButton) {
      return <View style={styles.addButton}>
        <IconButton icon="add-circle" onPress={() => this.showChangeLooksMaster()} size={40} color='#0000FF' />
        <Portal>
          <Dialog
            visible={this.state.changeLooksMasterDialogIsVisible}
            onDismiss={this._hidechangeLooksMasterDialog}>
            <Dialog.Title>Changer le maître des regards</Dialog.Title>
            <Dialog.Content>
              <TextInput
                label='Nom'
                value={this.state.looksMaster}
                onChangeText={text => this.setState({ looksMaster: text })}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => this.saveLooksMaster()}>Enregistrer</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>;
    } else {
      return null;
    }
  }

  showRulesButton() {
    if (this.state.rules.length > 0) {
      return <View style={styles.showRulesButton}>
        <IconButton icon="info" onPress={() => this.showRules()} size={40} color='#0000FF' />
        <Portal>
          <Dialog
            visible={this.state.rulesListDialogIsVisible}
            onDismiss={this._hideRulesListDialog}>
            <Dialog.Title>Liste des règles</Dialog.Title>
            <Dialog.Content>
              {this.state.rules.map((rule, key) => (
                <Paragraph key={key}>- {rule}</Paragraph>
              ))}
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={this._hideRulesListDialog}>Fermer</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>;
    } else {
      return null;
    }
  }

  questionsMasterButton() {
    if (this.state.questionsMaster) {
      return <View style={styles.questionsMasterButton}>
        <IconButton icon="help" onPress={() => this.showQuestionsMaster()} size={40} color='#0000FF' />
        <Portal>
          <Dialog
            visible={this.state.questionsMasterDialogIsVisible}
            onDismiss={this._hideQuestionsMasterDialog}>
            <Dialog.Title>Maître des questions</Dialog.Title>
            <Dialog.Content>
              <Paragraph>{this.state.questionsMaster}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={this._hideQuestionsMasterDialog}>Fermer</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    }
  }

  looksMasterButton() {
    if (this.state.looksMaster) {
      return <View style={styles.looksMasterButton}>
        <IconButton icon="remove-red-eye" onPress={() => this.showLooksMaster()} size={40} color='#0000FF' />
        <Portal>
          <Dialog
            visible={this.state.looksMasterDialogIsVisible}
            onDismiss={this._hideLooksMasterDialog}>
            <Dialog.Title>Maître des regards</Dialog.Title>
            <Dialog.Content>
              <Paragraph>{this.state.looksMaster}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={this._hideLooksMasterDialog}>Fermer</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    }
  }

  detailsDialog() {
    if (this.state.index > 0) {
      return <Portal>
        <Dialog
          visible={this.state.detailsDialogIsVisible}
          onDismiss={this._hideDetailsDialog}>
          <Dialog.Title>Détails</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{this.state.cards[this.state.index - 1].gage.description}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={this._hideDetailsDialog}>Fermer</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    }
  }

  render() {
    return (
      <PaperProvider>
        <View style={styles.containerCenter}>
          { this.gameBoard() }
          { this.newRuleButton() }
          { this.showRulesButton() }
          { this.questionsMasterButton() }
          { this.looksMasterButton() }
          { this.changeQuestionsMasterButton() }
          { this.changeLooksMasterButton() }
          { this.detailsDialog() }
        </View >
      </PaperProvider >
    );
  }
}

const styles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
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
  showRulesButton: {
    position: 'absolute',
    bottom: 10,
    right: 0,
  },
  questionsMasterButton: {
    position: 'absolute',
    top: 10,
    right: 0,
  },
  looksMasterButton: {
    position: 'absolute',
    top: 10,
    left: 0,
  },
});
