import React from "react";
//import {AC} from "../../store/gameReducer";
import {changeM, restart, takeM} from "../../store/controllers";
import {connect} from "react-redux";
import MatchGame from "./MatchGame";

let mover = (pl) => {
    let mov = "USER"
    if (Number(pl) === 0) mov = "USER"
    else mov = "COMP"
    return (mov);
}
let moverBlocker = (pl) => {
    let mov = true
    if (Number(pl) === 0) mov = false
    else mov = true
    return (mov);
}
let mapStateToProps = (state) => {
    return ({
        mover: mover(state.currentPlayer),
        moverBlocker: moverBlocker(state.currentPlayer), // = 0 ? true : false,
        userN: state.userN,
        aiN: state.aiN,
        currentN: state.currentN,
        currentM: state.currentM,
        maxM: state.maxM,
        currentPlayer: state.currentPlayer,
    });
};
let mapDispatchToProps = (dispatch) => {
    return ({
        changeM: m => changeM(dispatch, m),
        takeM: () => takeM(dispatch),
        restart: () => restart(dispatch),
    });


};
const MatchGameContainer = connect(mapStateToProps, mapDispatchToProps)(MatchGame);
export default MatchGameContainer;