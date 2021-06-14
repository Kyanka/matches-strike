import * as React from "react";
import {restart} from "../../store/controllers";
import {connect} from "react-redux";
import Victory from "./Victory";

let checkWin = (aiN) => {
    let win = "USER";
    if(aiN % 2 == 0) win = "COMPUTER"
    else win = "USER"
    return(win);
}
let mapStateToProps = (state) => {
    return ({
        aiN: state.aiN,
        userN: state.userN,
        checkWin: checkWin(state.aiN)
    });
}
let mapDispatchToProps = (dispatch) => {
    return ({
        restart: () => restart(dispatch)
    });
};
const VictoryContainer = connect(mapStateToProps, mapDispatchToProps)(Victory);
export default VictoryContainer;