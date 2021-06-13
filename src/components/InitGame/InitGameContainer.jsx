import * as React from "react";
import {AC} from "../../store/gameReducer";
import InitGame from "./InitGame";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return ({
        initM: state.game.initM,
        initN: state.game.initN,
        fPlayer:state.game.fPlayer
    });
};
let mapDispatchToProps = (dispatch) => {
    return ({
        setInitN: (newN) => {
            debugger
            console.log(newN)
            dispatch(AC.setInitNAC(newN))
        },
        setInitM: (newM) => {
            dispatch(AC.setInitMAC(newM))
        },
        setFPlayer: (fPlayer) => {
            dispatch(AC.setFPlayer(fPlayer))
        },
        init: () => {
            dispatch(AC.init())
        },
    });


};
const InitGameContainer = connect(mapStateToProps, mapDispatchToProps)(InitGame);
export default InitGameContainer;