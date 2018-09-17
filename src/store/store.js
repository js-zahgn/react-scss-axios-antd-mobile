
import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

let store;
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  store = createStore(
    rootReducers,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__())
  );
} else {
  store = createStore(
    rootReducers,
    applyMiddleware(thunk)
  );
}

export default store;
