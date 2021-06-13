import * as React from "react";
//import {AC} from "../../store/gameReducer";
import InitGame from "./InitGame";
import {connect} from "react-redux";
import {initM,initN,init,setFP} from "../../store/controllers";

let mapStateToProps = (state) => {
    return ({
        initM: state.initM,
        initN: state.initN,
        fPlayer:state.fPlayer
    });
};
let mapDispatchToProps = (dispatch) => {
    return ({
        setInitN: newN => initN(dispatch,newN),
        setInitM: newM => initM(dispatch,newM),
        setFPlayer: fPlayer => setFP(dispatch,fPlayer),
        init: () => init(dispatch),
    });

};
const InitGameContainer = connect(mapStateToProps, mapDispatchToProps)(InitGame);
export default InitGameContainer;