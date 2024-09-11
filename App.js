/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SyncCallback from './Modules/SyncCallback';
import CallbackHell from './Modules/CallbackHell';
import Promises from './Modules/Promises';
import StringFrequency from './Modules/StringFrequency';
import Recursion from './Modules/Recursion';
import MergeSort from './Modules/MergeSort';


const App = ()=>{

  return(<SafeAreaView>
   <StringFrequency></StringFrequency>
   {/* <MergeSort></MergeSort> */}
  </SafeAreaView>)
}

const styles = StyleSheet.create({
  
});

export default App;
