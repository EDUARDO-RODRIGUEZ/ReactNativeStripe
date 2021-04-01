import React from 'react';
import { AuthContexProvider } from './src/context/AuthContex';
import { RouterNavigation } from './src/navigation/RouterNavigation';
import Animated from 'react-native-reanimated';

const App = () => {
  return (
    <AuthContexProvider>
      <RouterNavigation />
    </AuthContexProvider>
  )
};

export default App;
