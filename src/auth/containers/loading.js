import React, { Component } from "react";
import LoadingLayout from "../components/loadingLayout";
import { connect } from "react-redux";

class Loading extends Component {
  componentDidMount() {
    if (this.props.auth) {
      this.props.navigation.navigate("RemindersList");
    } else {
      this.props.navigation.navigate("Login");
    }
  }
  render() {
    return <LoadingLayout />;
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Loading)

// export default Loading;
