import { AppRegistry } from 'react-native';
import MainScreen from './src/MainScreen.js'
import NameListScreen from './src/NameListScreen.js'
import {StackNavigator,} from 'react-navigation';

//This is the top level navigator that contains all the screens
const AppNavigator = StackNavigator({
        Main: {screen: MainScreen},
        List: {screen: NameListScreen},
    },
    {
        initialRouteName: 'Main'
    }
);

AppRegistry.registerComponent('DemoApp', () => AppNavigator);

