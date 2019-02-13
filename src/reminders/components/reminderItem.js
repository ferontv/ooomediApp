import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Card, Text, CardItem, Body, Right } from "native-base";

const ReminderItem = props => {
  return (
    <TouchableOpacity onPress={props.goToDetails} style={styles.container}>
      <CardItem>
        <Body>
          <Text>{props.title}</Text>
          {/* <Text note>Guardado por: Fernando Ontiveros</Text> */}
          <Text note>{props.description}</Text>
        </Body>
        <Right>
          <Text note>3:43 pm</Text>
        </Right>
      </CardItem>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ReminderItem;
