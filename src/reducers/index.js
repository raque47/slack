import { combineReducers } from 'redux';

// Reducers
import userReducer from './user-reducer';
//import widgetReducer from './widget-reducer';
//import searchLayoutReducer from './search-layout-reducer';

// Combine Reducers
var reducers = combineReducers({
    userState: userReducer,
    //widgetState: widgetReducer,
    //ssearchLayoutState: searchLayoutReducer
});

export default reducers;
