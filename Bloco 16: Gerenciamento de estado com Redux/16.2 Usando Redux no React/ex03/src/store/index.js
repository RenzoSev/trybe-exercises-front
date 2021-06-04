import { combineReducers, createStore } from 'redux';

import changeSignal from './reducers/changeSignal';
import moveCar from './reducers/moveCar';

const rootReducer = combineReducers({ changeSignal, moveCar })

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
