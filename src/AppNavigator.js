import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import React from "react";
import Login from "./auth/containers/login";
import SignUp from "./auth/containers/signUp";
import Loading from "./auth/containers/loading";
import ReminderDetails from "./reminders/containers/reminderDetails";
import Reminders from "./reminders/containers/reminders";
import AddReminder from "./reminders/containers/addReminder";

const Main = createStackNavigator({
  Reminders,
  ReminderDetails
});

const Auth = createStackNavigator(
  {
    Login,
    SignUp
  },
  {
    headerMode: "none",
    cardStyle: {
      backgroundColor: "white"
    }
  }
);

const WithModal = createStackNavigator(
  {
    Main: {
      screen: Main
    },
    AddReminder: AddReminder
  },
  {
    mode: "modal",
    headerMode: "none",
    cardStyle: {
      backgroundColor: "white"
    },
    navigationOptions: {
      gesturesEnabled: true
    }
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    App: WithModal,
    Auth: Auth,
    Loading: Loading
  },
  {
    initialRouteName: "Auth"
  }
);

export default createAppContainer(SwitchNavigator);
