import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Text, Row, Col } from "native-base";
import RemindersList from "../components/remindersList";

export default class Reminders extends Component {
  state = {
    title: "",
    description: "",
    content: "",
    items: [
      {
        title: "Gabirol",
        description: "Tomar 1 cada 12 horas por 7 días",
        dateTime: new Date(),
        userCreator: "User",
        key: "1"
      },
      {
        title: "Severin N.F. Tabletas",
        description: "Tomar 1 cada 12 horas por 3 días",
        dateTime: new Date(),
        userCreator: "User",
        key: "2"
      },
      {
        title: "Dualgos Tabletas",
        description: "Tomar 1 cada 8 horas por 3 días",
        dateTime: new Date(),
        userCreator: "User",
        key: "3"
      }
    ],
    message: "",
    activated: false
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Text>oooMedi</Text>,
      headerRight: (
        <Button onPress={navigation.getParam("logout")} title="Cerrar Sesión" />
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ logout: this._logout });
  }

  _logout = () => {
    this.props.navigation.navigate("Login");
  };

  addReminder = () => {
    this.props.navigation.navigate("AddReminder");
  };

  goToDetails = ({ ...item }) => {
    this.props.navigation.navigate("ReminderDetails", {
      title: item.title,
      description: item.description,
      createdBy: item.createdBy,
      timestamp: item.timestamp,
      key: item.key
    });
  };

  handleTitle = text => {
    this.setState({ title: text });
  };
  handleDescription = text => {
    this.setState({ description: text });
  };

  addItem = () => {
    const { items } = this.state;
    const newItem = {
      title: this.state.title,
      description: this.state.description,
      createdBy: "User",
      timestamp: "03:28 pm",
      key:
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15)
    };

    this.state.title &&
      this.state.description !== "" &&
      this.setState({
        items: [...this.state.items, newItem],
        title: "",
        description: ""
      });
  };

  removeItem = itemParam => {
    // console.log("remove" + JSON.stringify(itemParam));
    const newItems = this.state.items.filter(item => {
      return item !== itemParam;
    });

    this.setState({
      items: [...newItems]
    });
  };

  render() {
    const { items } = this.state;
    return (
      <View style={styles.container}>
        <Row size={15}>
          <Col size={60}>
            <TextInput
              style={styles.input}
              placeholder="Título del recordatorio"
              placeholderTextColor="black"
              onChangeText={this.handleTitle}
              value={this.state.title}
            />
            <TextInput
              style={styles.input}
              placeholder="Agrega detalles (medicamentos, horas de ingesta, alimentos, etc.)"
              placeholderTextColor="black"
              multiline={true}
              numberOfLines={4}
              onChangeText={this.handleDescription}
              value={this.state.description}
            />
          </Col>
          <Col size={40} style={styles.alignButton}>
            <TouchableOpacity onPress={this.addItem} style={styles.button}>
              <Text style={styles.buttonLabel}>Agregar recordatorio</Text>
            </TouchableOpacity>
          </Col>
        </Row>
        <Row size={85}>
          <Col>
            <RemindersList
              reminder={this.state.items}
              goToDetails={this.goToDetails}
              removeItem={this.removeItem}
            />
          </Col>
        </Row>
        {/* <Fab
          style={{ backgroundColor: "#2196f3" }}
          position="bottomRight"
          // onPress={() => this.setState({ active: !this.state.active })}>
          onPress={this.addReminder}
        >
          <Icon name="add" />
        </Fab> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    marginBottom: 10,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "transparent",
    color: "black",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1
  },
  button: {
    backgroundColor: "#2196f3",
    borderRadius: 5,
    marginLeft: 10
  },
  buttonLabel: {
    color: "white",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  alignButton: {
    justifyContent: "center"
  }
});
