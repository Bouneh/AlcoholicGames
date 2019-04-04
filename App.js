import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './Home';
import CardsScreen from './games/Cards';
import DicesScreen from './games/Dices';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Cards: { screen: CardsScreen },
  Dices: { screen: DicesScreen },
});

export default createAppContainer(AppNavigator);