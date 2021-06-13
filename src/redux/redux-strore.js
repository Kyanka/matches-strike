import {combineReducers, createStore} from "redux";
import initGameReducer from "./initGameReducer";
import matchGameReducer from "./matchGameReducer";
import victoryReducer from "./victoryReducer";

let reducers = combineReducers({
    initPage: initGameReducer,
    gamePage: matchGameReducer,
    victoryPage: victoryReducer,
});
let store = createStore(reducers);

export default store;