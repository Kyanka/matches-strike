import React from "react";
import {AC} from "../../store/gameReducer";

import {connect} from "react-redux";
import MatchGame from "./MatchGame";

let mapStateToProps = (state) => {
    return ({
        mover: state.game.currentPlayer = 0 ? "USER" : "COMP",
        moverBlocker: state.currentPlayer = 0 ? false : true,

        userN: state.game.userN,
        aiN: state.game.aiN,
        currentN: state.game.currentN,
        currentM: state.game.currentM,
        maxM: state.game.maxM,
        currentPlayer: state.game.currentPlayer,
    });
};
let mapDispatchToProps = (dispatch) => {
    return ({
        changeM: (m) => {
            console.log(m)
            dispatch(AC.changeMAC(m));
        },
        takeM: () => {
            dispatch(AC.takeMAC());
        },
        restart: () => {
            dispatch(AC.restart());
        },
    });


};
const MatchGameContainer = connect(mapStateToProps, mapDispatchToProps)(MatchGame);
export default MatchGameContainer;