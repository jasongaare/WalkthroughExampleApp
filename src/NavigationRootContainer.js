import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import PlacementExamples from './screens/PlacementExamples';
import ChildlessPlacementExamples from './screens/ChildlessPlacementExamples';

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    PlacementExamples: {
      screen: PlacementExamples,
    },
    ChildlessPlacementExamples: {
      screen: ChildlessPlacementExamples,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'palevioletred',
      },
      headerTintColor: 'black',
    },
  },
);

const NavigationRootContainer = createAppContainer(MainStack);

export default NavigationRootContainer;
