import React, { Component } from "react";
import AppNavigator from "./src/AppNavigator";
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './src/store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './src/config/fbConfig'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig, { userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true }),
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}><AppNavigator /></Provider>
    );
  }
}
