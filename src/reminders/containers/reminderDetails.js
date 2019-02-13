import React, { Component } from "react";
import { View } from "react-native";
import { Card, CardItem, Text, Body, Col } from "native-base";

export default class ReminderDetails extends Component {
  render() {
    return (
      <View>
        <Card>
          <CardItem header bordered>
            <Text>{this.props.navigation.getParam("title")}</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>{this.props.navigation.getParam("description")}</Text>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Col>
              <Text>{this.props.navigation.getParam("createdBy")}</Text>
              <Text note>{this.props.navigation.getParam("timestamp")}</Text>
            </Col>
          </CardItem>
        </Card>
      </View>
    );
  }
}
