import {applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import monitorReducerEnhancer from './monitorReducerEnhancer';
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = composeWithDevTools(
  middlewareEnhancer,
  monitorReducerEnhancer,
);

const store = createStore(rootReducer, {}, composedEnhancers);

if (module?.hot) {
  module?.hot?.accept(rootReducer, () => store.replaceReducer(rootReducer));
}

export default store;
