import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform
} from "react-native";
import { Icon, Fab, Container, Row, Grid } from "native-base";

class AddReminder extends Component {
  handleAddReminder = () => {
    this.props.navigation.pop();
  };
  goBack = () => {
    // this.props.navigation.navigate("Loading");
    this.props.navigation.pop();
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Container>
          <Grid>
            <Row size={30}>
              <Fab
                style={{ backgroundColor: "#2196f3", marginTop: 50 }}
                position="topRight"
                // onPress={() => this.setState({ active: !this.state.active })}>
                onPress={this.goBack}
              >
                <Icon name="close" style={styles.icon} />
              </Fab>
            </Row>
            <Row style={styles.formContainer} size={70}>
              <View>
                <View>
                  <Text style={styles.h1Text}>Recordatorio</Text>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Título del recordatorio"
                  placeholderTextColor="black"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Agrega detalles (medicamentos, horas de ingesta, alimentos, etc.)"
                  placeholderTextColor="black"
                  multiline={true}
                  numberOfLines={4}
                />
                <TouchableOpacity
                  onPress={this.handleAddReminder}
                  style={styles.button}
                >
                  <Text style={styles.buttonLabel}>Agregar recordatorio</Text>
                </TouchableOpacity>
              </View>
            </Row>
          </Grid>
        </Container>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  formContainer: {
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  h1Text: {
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 20
  },
  input: {
    marginBottom: 10,
    width: 250,
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
    marginTop: 10
  },
  buttonLabel: {
    color: "white",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  icon: {
    ...Platform.select({
      ios: {
        fontSize: 40,
        marginTop: 20
      },
      android: {}
    })
  }
});

export default AddReminder;
