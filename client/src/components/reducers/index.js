import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { appReducer } from './appReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
