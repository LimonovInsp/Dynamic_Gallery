import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import GalleryScreen from "./components/GalleryScreen";
import FullScreen from "./components/FullScreen";

export default class App extends React.Component {
  render() {
    return <NavigationApp />;
  }
}

const Navigator = createStackNavigator({
  Gallery: GalleryScreen,
  FullPicture: FullScreen
});

const NavigationApp = createAppContainer(Navigator);
