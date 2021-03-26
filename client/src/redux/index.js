import {combineReducers, createStore} from 'redux';
import {todos} from './todo/reducer';
import {alert} from './alert/reducers';

const rootReducer = combineReducers({todos, alert})

export const store = createStore(rootReducer)
