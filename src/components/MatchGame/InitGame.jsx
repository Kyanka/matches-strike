import s from "./InitGame.module.css"
import * as React from "react";
import {NavLink} from "react-router-dom";
import {AC} from "../../redux/state";


const InitGame = (props) => {
    let newN = React.createRef();
    let newM = React.createRef();
    let fPlayer = React.createRef();
    let vicCond = React.createRef();
    let setInitN = () => {
        props.dispatch(AC.setInitNAC(newN.current.value));
    }
    let setInitM = () => {
        props.dispatch(AC.setInitMAC(newM.current.value));
    }
    let setFPlayer = () => {
        props.dispatch(AC.setFPlayer(fPlayer.current.value));
    }
    let reset = () => {
        props.dispatch(AC.reset(newN.current.value,newM.current.value,fPlayer.current.value));
    }


    return (
        <main className={s.content}>
            <div className={s.triangle}></div>
            <div className={s.gameText}>
                <p>MATCH GAME </p>
                Number of matches: <br/>
                <input type="number" step="2" min="3" value={props.mG.initN} onChange={setInitN} ref={newN}/>
                <br/>
                Max stack: <br/>
                <input type="number" min="2" max={props.mG.initN} value={props.mG.initM} onChange={setInitM}
                       ref={newM}/>
                <br/>
                First move: <br/>
                User
                <input type="range" min="0" max="1" value={props.mG.fPlayer} onChange={setFPlayer}
                       ref={fPlayer} className={s.slider}/>
                Computer<br/>
                <p><NavLink onClick={reset} to={"/matchGame"}>PLAY</NavLink></p>
            </div>
        </main>
    );
}
export default InitGame;