/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { View, ScrollView } from 'react-native';
import Header from './component/commons/Header';
import reducers from './reducers'
import ListView from './component/ListView/ListView';

const App = () => (
  <Provider store={createStore(reducers)}>
    <Header headerText='ReduxApp!' />
    <View style = {{flex : 1}}>
      <ListView />
    </View>
  </Provider>
);


export default App;
