import s from "./InitGame.module.css"
import * as React from "react";
import {NavLink} from "react-router-dom";


const InitGame = (props) => {

    return (
        <main className={s.content}>
            <div className={s.triangle}></div>
            <div className={s.gameText}>
                <p>MATCH GAME </p>
                Number of matches: <br/>
                <input type="number" step="2" min="3" value={props.initN} onChange={e=>props.setInitN(e.target.value)}/>
                <br/>
                Max stack: <br/>
                <input type="number" min="2" max={props.initN} value={props.initM} onChange={e=>props.setInitM(e.target.value)}/>
                <br/>
                First move: <br/>
                User
                <input type="range" min="0" max="1" value={props.fPlayer} onChange={e=>props.setFPlayer(e.target.value)} className={s.slider}/>
                Computer<br/>
                <p><NavLink onClick={props.init} to={"/matchGame"}>PLAY</NavLink></p>
            </div>
        </main>
    );
}
export default InitGame;