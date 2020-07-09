import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/reducer';
const store = createStore(
    rootReducer,
  applyMiddleware(
    createLogger(),
  ),
);
// Exports
export {
  store
};