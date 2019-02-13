import React, { Component } from "react";
import AppNavigator from "./src/AppNavigator";

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return <AppNavigator />;
  }
}
