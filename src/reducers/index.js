import { combineReducers } from "redux";
import reducerTemplate from './reducerTemplate';

let rootReducer = combineReducers({

    template: reducerTemplate

});

export default rootReducer;