import { todoScreenReducer } from '../screens/Home/store/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todoScreen: todoScreenReducer,
});


export default rootReducer;