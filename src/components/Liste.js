import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import Detay from './Detay';
// const Liste = () => {
// return (
//    <View style={{ marginTop: 5 }}>
//      <Text>Ornek Proje Liste Olusturma</Text>
//    </View>
//  );
//};

class Liste extends Component {
  state = { data: [] };
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ data: response.data }));
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
renderData() {
  return this.state.data.map((responseData, Id) =>
      <Detay key={Id} data={responseData} />
);
}

render() {
  console.log('Gelen data ' + this.state);
  console.log('render');
  return (
    <ScrollView style={{ marginTop: 5 }}>
    {this.renderData()}
    </ScrollView>
  );
  }
}


export default Liste;
