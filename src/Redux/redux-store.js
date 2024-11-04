import {combineReducers, legacy_createStore} from "redux";
import ContentReducer from "./ContentReducer";
import SidebarReducer from "./SidebarReducer";

let reducers = combineReducers({
 Sidebar:SidebarReducer,
 MainContent:ContentReducer
});
export let store = legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

