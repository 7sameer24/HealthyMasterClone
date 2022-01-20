import {createStore} from 'redux';
import {mainReducer} from './reducer/reducer';

export const store = createStore(mainReducer);
