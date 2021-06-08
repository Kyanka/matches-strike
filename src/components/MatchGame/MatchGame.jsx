import s from "./MatchGame.module.css"
import * as React from "react";
import {AC} from "../../redux/state";
import LinkButton from './LinkButton'
import { Redirect } from 'react-router'



const MatchGame = (props) => {

    let newM = React.createRef();
    let changeM = () => {
        let m = newM.current.value
        props.dispatch(AC.changeMAC(m));
    }
    let takeM = () => {
        //let m = newM.current.value
        props.dispatch(AC.takeMAC());
    }
    let mover = () => {
        if(props.mG.currentPlayer == 0)
            return("USER");
        if(props.mG.currentPlayer == 1)
            return("COMP");
    }
    let moverBlocker = () => {
        if(props.mG.currentPlayer == 0)
            return(false);
        if(props.mG.currentPlayer == 1)
            return(true);
    }
    let restart = () => {
        props.dispatch(AC.restart());
    }
    if(props.mG.currentN == 0) return <Redirect to="/victory" />

    return (
        <main  className={s.content}>
            <div className={s.moveOf}>
                MOVE OF: <span className={s.mover}>{mover()}</span>
            </div>

            <div className={s.score}>
                <div>
                    <span>User</span>
                    <span>{props.mG.userN}</span>
                </div>
                <div>
                    <span>Matches</span>
                    <span>{props.mG.currentN}</span>
                </div>
                <div>
                    <span>Computer</span>
                    <span>{props.mG.aiN}</span>
                </div>
            </div>

            <div className={s.userM}>
                <div className={s.stack}>
                    <p>Matches in stuck:{props.mG.currentM}</p>
                    <input type="range" min="1" max={props.mG.maxM} value={props.mG.currentM} onChange={changeM}
                           ref={newM} className={s.slider}/>
                </div>
                <div className={s.buttons}>
                    <button disabled={moverBlocker()} onClick={takeM}>TAKE IT</button>
                </div>
                <div className={s.buttons}>
                    <LinkButton cP={props.mG.currentPlayer} onClick={restart}to='/init'> &#x21ba;RESTART</LinkButton>
                </div>

            </div>
        </main>
    );
}
export default MatchGame;