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
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  handleSubmit = () => {
    this.props.signIn(this.state);
    // this.props.navigation.navigate("Loading");
    this.props.navigation.navigate("Reminders");
  };
  goToSignUp = () => {
    // this.props.navigation.navigate("Loading");
    this.props.navigation.navigate("SignUp");
  };
  render() {
    const { authError } = this.props;
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
            onChangeText={this.handleEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="black"
            secureTextEntry={true}
            autoCorrect={false}
            autoComplete="password"
            textContentType="password"
            onChangeText={this.handlePassword}
          />
          <TouchableOpacity onPress={this.handleSubmit} style={styles.button1}>
            <Text style={styles.buttonLabel1}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToSignUp} style={styles.button2}>
            <Text style={styles.buttonLabel2}>Crear cuenta</Text>
          </TouchableOpacity>
          {authError ? Toast.show({ text: authError, buttonText: "OK", type: "danger" }) : null}
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

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
