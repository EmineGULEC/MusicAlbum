// import ettiğim bölüm

import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import Liste from './src/components/Liste';

//kendi komponentlerimizi yazıyoruz.
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Music Albums'} />
    <Liste />
    </View>
);

export default App;

//kodlarımızı render ettiğimiz bölüm
AppRegistry.registerComponent('firstProject', () => App);
