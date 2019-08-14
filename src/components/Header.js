import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
  const { textSteyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textSteyle}> {props.headerText} </Text>
    </View>
  );
};

const styles = {
  textSteyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    shadowOffset: { widht: 0, height: 6 },
    shadowOpacity: 0.2

}
};

export default Header;
