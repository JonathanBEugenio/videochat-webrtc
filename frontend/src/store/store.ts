import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";

const rootReducer = combineReducers({
    auth: authReducer
});
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;