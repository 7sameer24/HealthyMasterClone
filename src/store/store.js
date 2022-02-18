import { createStore } from 'redux';
import { mainReducer } from './reducer/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const persistConfig = {
//   key: 'IOO',
//   storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig, mainReducer);

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

export default store = createStore(mainReducer);
