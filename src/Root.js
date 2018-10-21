import React from 'react';
import reducers from 'reducers/index';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

export default ({ children }) => {
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(reduxPromise)),
  );
  return <Provider store={store}>{children}</Provider>;
};
