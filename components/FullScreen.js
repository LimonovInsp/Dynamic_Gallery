import React, { Component } from "react";

import { View, StyleSheet, Image } from "react-native";

class FullScreen extends Component {
  static navigationOptions = {
    title: "Back to the Gallery"
  };
  render() {
    const { navigation } = this.props;
    const currentImage = navigation.getParam("currentImage");
    return (
      <View style={styles.container}>
        <Image style={styles.tremendousImage} source={{ uri: currentImage }} />
      </View>
    );
  }
}

export default FullScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  tremendousImage: {
    flex: 1,
    height: null,
    width: null
  }
});
