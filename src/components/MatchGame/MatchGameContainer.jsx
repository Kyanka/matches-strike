import React from "react";
//import {AC} from "../../store/gameReducer";
import {changeM,takeM,restart} from "../../store/controllers";
import {connect} from "react-redux";
import MatchGame from "./MatchGame";

let mapStateToProps = (state) => {
    return ({
        mover: state.currentPlayer = 0 ? "USER" : "COMP",
        moverBlocker: state.currentPlayer = 0 ? false : true,

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
        changeM: m => changeM(dispatch,m),
        takeM: () => takeM(dispatch),
        restart: () =>  restart(dispatch),
    });


};
const MatchGameContainer = connect(mapStateToProps, mapDispatchToProps)(MatchGame);
export default MatchGameContainer;