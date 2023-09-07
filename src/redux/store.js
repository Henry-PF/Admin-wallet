import { createStore, applyMiddleware, compose } from 'redux'; // Agrega 'compose'
import rootReducer from './reducer';
import thunk from 'redux-thunk';

// ...

// Agrega la configuración para Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
