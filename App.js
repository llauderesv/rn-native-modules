/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  NativeModules,
} from 'react-native';

// This module is exported in Objective-C code and to be used now as React Native Module...
// Here's an example that getting the actual device name running the app..
const Device = NativeModules.Device;
Device.getDeviceName((error, name) => {
  console.log(error, name);
});

// Log Event in Debugging Mode in browser
Device.logEvent('Hello World!');

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.center}>
        <Text>Hello World from Native Modules</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
