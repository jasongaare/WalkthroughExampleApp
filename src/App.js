import React from 'react';
import { WalkthroughProvider } from 'react-native-walkthrough';

import NavigationRootContainer from './NavigationRootContainer';

const App = () => (
  <WalkthroughProvider>
    <NavigationRootContainer />
  </WalkthroughProvider>
);

export default App;
