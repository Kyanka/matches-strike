import {createStore} from "redux";
import gameReducer from "./gameReducer";

let preloadedState = {
    game: {
        vicCond: "0",
        fPlayer: "0",
        currentPlayer: "0",
        initN: "25",
        initM: "3",
        maxM: "3",
        currentN: "25",
        currentM: "1",
        userN: "0",
        aiN: "0",
    },
};
let store = createStore(gameReducer);

export default store;