import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity
} from "react-native";

class Login extends Component {
  handleLogin = () => {
    // this.props.navigation.navigate("Loading");
    this.props.navigation.navigate("Reminders");
  };
  goToSignUp = () => {
    // this.props.navigation.navigate("Loading");
    this.props.navigation.navigate("SignUp");
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            source={require("../../../assets/img/logoOoomedi.png")}
            style={styles.logo}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="black"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            autoComplete="email"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="black"
            secureTextEntry={true}
            autoCorrect={false}
            autoComplete="password"
            textContentType="password"
          />
          <TouchableOpacity onPress={this.handleLogin} style={styles.button1}>
            <Text style={styles.buttonLabel1}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToSignUp} style={styles.button2}>
            <Text style={styles.buttonLabel2}>Crear cuenta</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
    alignSelf: "center"
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
  button1: {
    backgroundColor: "#2196f3",
    borderRadius: 5,
    marginBottom: 10
  },
  button2: {
    backgroundColor: "transparent",
    borderRadius: 5,
    borderColor: "#2196f3",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 10
  },
  buttonLabel1: {
    color: "white",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  buttonLabel2: {
    color: "#2196f3",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default Login;
