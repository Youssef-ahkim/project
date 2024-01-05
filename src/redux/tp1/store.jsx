import { legacy_createStore } from 'redux';
import productReducer from './reducers';
const store = legacy_createStore(productReducer);
            export default store;
