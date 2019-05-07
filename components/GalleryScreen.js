import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import ResponsiveImage from "react-native-responsive-image";

const numColumns = 3;

class GalleryScreen extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: []
    };
  }

  static navigationOptions = {
    header: null
  };

  renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexGrow: 1,
          alignItems: "center"
        }}
      >
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("FullPicture", {
              currentImage: item.urls.full
            })
          }
        >
          <ResponsiveImage
            source={{ uri: item.urls.full }}
            initWidth="128"
            initHeight="128"
          />
        </TouchableOpacity>
        <Text style={styles.author}>{item.user.username}</Text>
        <Text style={styles.headerName}>{item.user.first_name}</Text>
      </View>
    );
  };

  componentDidMount() {
    const url =
      "https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataSource: responseJson
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={numColumns}
        />
      </View>
    );
  }
}

export default GalleryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 2
  },
  author: {
    fontSize: 13,
    color: "#000",
    textAlign: "center"
  },
  headerName: {
    fontSize: 12,
    color: "#1C5C45",
    textAlign: "center"
  }
});
