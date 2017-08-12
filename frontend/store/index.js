import { createStore } from 'redux';
import reducer from '../reducers';

let defaultState = {
  text: "Default Text"
};

export const configureStore = (initialState=defaultState) => {
  return createStore(reducer, initialState);
};
