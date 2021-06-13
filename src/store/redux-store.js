import {createStore} from "redux";
import gameReducer from "./gameReducer";

let store = createStore(gameReducer);

export default store;