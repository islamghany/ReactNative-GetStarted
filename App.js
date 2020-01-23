import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import screenComponent from './components/screenComponent';
import ListScreen from './components/ListScreen';
import ImageScreen from './components/ImageScreen';
import CounterState from './components/CounterState';
import ColorSelect from './components/Color'
import TextScreen from './components/TextScreen'
import BoxScreen from './components/BoxScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component:screenComponent,
    List:ListScreen,
    Image:ImageScreen,
    Counter:CounterState,
    Color:ColorSelect,
    Text:TextScreen,
    Box:BoxScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);