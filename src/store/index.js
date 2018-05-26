import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import yasuiReducers from "./reducers";

const store = createStore(
    yasuiReducers,
    compose(
        applyMiddleware(thunk)
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
