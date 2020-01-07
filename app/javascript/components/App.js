import React from "react";
import PropTypes from "prop-types";
import RoutePage from './Route/RoutePage';
import logger from 'redux-logger';
import reducer from '../reducers/index';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(thunk, logger)

const store = createStore(reducer, composeWithDevTools(middleware));

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
      	<Provider store={store}>
      		<RoutePage/>
      	</Provider>
      </React.Fragment>
    );
  }
}

App.propTypes = {
};
export default App
