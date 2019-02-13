import React, { Component } from "react";
import LoadingLayout from "../components/loadingLayout";
// import { connect } from "react-redux";

class Loading extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.navigation.navigate("RemindersList");
    } else {
      this.props.navigation.navigate("Login");
    }
  }
  render() {
    return <LoadingLayout />;
  }
}
// function mapStateToProps(state) {
//   return {
//     user: state.user
//   }
// }

// export default connect(mapStateToProps)(Login)

export default Loading;
