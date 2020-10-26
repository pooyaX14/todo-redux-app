import { createStore, compose, applyMiddleware } from 'redux';
import { taskScreenStateProps } from "../screens/Home/store/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
// import actionCreators from '../screens/Home/store/action';
import rootReducer from './reducers';
import thunk from 'redux-thunk'
import { StateProps } from './types'


export function configureDefaultState() {
    // create an object with default data
    const defaultState = {
        todoScreen: taskScreenStateProps,
    } as StateProps;

    return defaultState;
}

export function configureStore(defaultState: StateProps) {
    // const composeEnhancers =  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose({
    //     trace: true, // (action) => { return ‘trace as string’; }
    //     traceLimit: 25,
    //  })) || compose;
    const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(thunk)));
    return store;
}