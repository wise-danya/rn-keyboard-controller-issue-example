/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {
  KeyboardProvider,
  useKeyboardController,
} from 'react-native-keyboard-controller';

function App(): React.JSX.Element {
  return (
    <KeyboardProvider
      enabled={false}
      statusBarTranslucent
      navigationBarTranslucent>
      <Home />
    </KeyboardProvider>
  );
}

function Home(): React.JSX.Element {
  const {enabled, setEnabled} = useKeyboardController();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black'}}>
        {`Keyboard Controller enabled: ${enabled}`}
      </Text>
      <TouchableHighlight
        style={{borderRadius: 6, borderWidth: 1, marginTop: 16, padding: 16}}
        onPress={() => setEnabled(prev => !prev)}>
        <Text style={{color: 'black'}}>Toggle Keyboard Controller</Text>
      </TouchableHighlight>
    </View>
  );
}

export default App;
