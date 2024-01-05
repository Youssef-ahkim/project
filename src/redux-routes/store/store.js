import { legacy_createStore } from 'redux';

import bookReducer from '../reducers/reducers';

const store = legacy_createStore(bookReducer);

export default store;
