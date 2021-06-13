import s from "./MatchGame.module.css"
import * as React from "react";
import {AC} from "../../store/gameReducer";
import LinkButton from '../LinkButton'
import { Redirect } from 'react-router'



const MatchGame = (props) => {
    if(props.currentN == 0) return <Redirect to="/victory" />

    return (
        <main  className={s.content}>
            <div className={s.moveOf}>
                MOVE OF: <span className={s.mover}>{props.mover}</span>
            </div>

            <div className={s.score}>
                <div>
                    <span>User</span>
                    <span>{props.userN}</span>
                </div>
                <div>
                    <span>Matches</span>
                    <span>{props.currentN}</span>
                </div>
                <div>
                    <span>Computer</span>
                    <span>{props.aiN}</span>
                </div>
            </div>

            <div className={s.userM}>
                <div className={s.stack}>
                    <p>Matches in stuck:{props.currentM}</p>
                    <input type="range" min="1" max={props.maxM} onChange={e=>props.changeM(e.target.value)}
                           className={s.slider}/>
                </div>
                <div className={s.buttons}>
                    <button disabled={props.moverBlocker} onClick={props.takeM}>TAKE IT</button>
                </div>
                <div className={s.buttons}>
                    <LinkButton cP={props.currentPlayer} onClick={props.restart}to='/init'> &#x21ba;RESTART</LinkButton>
                </div>

            </div>
        </main>
    );
}
export default MatchGame;