import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {

  // Store creation. The 2nd arguemnt to createStore is so Chrome Redux DevTools
  // extension would work. See
  // https://github.com/zalmoxisus/redux-devtools-extension
  const store = createStore(
      combineReducers({
        // set up expenses state to be managed by the expensesReducer
        auth: authReducer
      }), 
      composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}