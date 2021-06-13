import * as React from "react";
import {AC} from "../../store/gameReducer";
import {connect} from "react-redux";
import Victory from "./Victory";


let mapStateToProps = (state) => {
    return ({
        aiN: state.game.aiN,
        userN: state.game.userN,
        checkWin: state.game.aiN % 2 == 0 ? "COMPUTER" : "USER"
    });
}
let mapDispatchToProps = (dispatch) => {
    return ({
        restart: () => {
            dispatch(AC.restart());
        },
    });


};
const VictoryContainer = connect(mapStateToProps, mapDispatchToProps)(Victory);
export default VictoryContainer;