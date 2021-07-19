import {createStore,combineReducers} from 'redux';
import itemReducer from '../redux/item';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
    item:itemReducer
});

const store = createStore(rootReducer,composeWithDevTools());

export default store;