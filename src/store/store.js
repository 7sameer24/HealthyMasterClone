import {createStore} from 'redux';
import {mainReducer} from './reducer/reducer';

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};
